import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';
import multer from 'multer';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import moment from 'moment';

// Import configuration and routes
import { config } from '../config/config.js';
import mainRoutes from '../routes/main.js';
import authRoutes from '../routes/auth.js';
import { posts, comments, subscribers, userLikes, users, categories } from '../models/data.js';
import { generateSlug } from '../utils/helpers.js';
import { isAuthenticated, isAdmin } from '../middleware/auth.js';

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Rate limiting
const limiter = rateLimit(config.rateLimit);
app.use(limiter);

// Session configuration
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
}));

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// View engine
app.set('view engine', 'ejs');
app.set('views', join(__dirname, '../views'));

// Routes
app.use('/', mainRoutes);
app.use('/', authRoutes);

// Admin routes
app.get('/admin', isAdmin, (req, res) => {
  const stats = {
    totalPosts: posts.length,
    publishedPosts: posts.filter(p => p.published).length,
    totalUsers: users.length,
    totalComments: comments.length,
    totalViews: posts.reduce((sum, p) => sum + p.views, 0)
  };
  
  res.render('admin/dashboard', {
    title: 'Admin Dashboard - JJ Blog',
    user: users.find(u => u.id === req.session.userId),
    stats,
    recentPosts: posts.slice(-5).reverse(),
    categories,
    moment
  });
});

app.get('/admin/posts', isAdmin, (req, res) => {
  res.render('admin/posts', {
    title: 'Manage Posts - JJ Blog',
    user: users.find(u => u.id === req.session.userId),
    posts: posts.reverse(),
    categories,
    moment
  });
});

app.get('/admin/posts/new', isAdmin, (req, res) => {
  res.render('admin/post-form', {
    title: 'New Post - JJ Blog',
    user: users.find(u => u.id === req.session.userId),
    post: null,
    categories
  });
});

app.post('/admin/posts', isAdmin, upload.single('image'), (req, res) => {
  const { title, content, category, tags, featured, published } = req.body;
  const slug = generateSlug(title);
  
  const newPost = {
    id: posts.length + 1,
    title,
    slug,
    content: DOMPurify.sanitize(content),
    excerpt: content.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
    author: req.session.username,
    authorId: req.session.userId,
    category,
    tags: tags.split(',').map(tag => tag.trim()),
    featured: featured === 'on',
    published: published === 'on',
    views: 0,
    likes: 0,
    image: req.file ? '/uploads/' + req.file.filename : 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  posts.push(newPost);
  res.redirect('/admin/posts');
});

// Comment system
app.post('/comment', isAuthenticated, (req, res) => {
  const { postId, content } = req.body;
  const user = users.find(u => u.id === req.session.userId);
  
  const newComment = {
    id: comments.length + 1,
    postId: parseInt(postId),
    userId: user.id,
    username: user.username,
    avatar: user.avatar,
    content: DOMPurify.sanitize(content),
    createdAt: new Date()
  };
  
  comments.push(newComment);
  res.redirect('back');
});

// API endpoints
app.post('/api/like/:postId', (req, res) => {
  const postId = parseInt(req.params.postId);
  const post = posts.find(p => p.id === postId);
  
  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found' });
  }
  
  // If user is authenticated, track their likes
  if (req.session.userId) {
    const userId = req.session.userId;
    
    if (!userLikes[userId]) {
      userLikes[userId] = [];
    }
    
    if (userLikes[userId].includes(postId)) {
      userLikes[userId] = userLikes[userId].filter(id => id !== postId);
      post.likes = Math.max(0, post.likes - 1);
      res.json({ success: true, likes: post.likes, liked: false });
    } else {
      userLikes[userId].push(postId);
      post.likes++;
      res.json({ success: true, likes: post.likes, liked: true });
    }
  } else {
    // For non-authenticated users, just increment the like count
    post.likes++;
    res.json({ success: true, likes: post.likes, liked: true });
  }
});

// Search API
app.get('/api/search', (req, res) => {
  const query = req.query.q;
  const results = posts.filter(p => 
    p.published && (
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.content.toLowerCase().includes(query.toLowerCase())
    )
  ).slice(0, 5);
  
  res.json(results.map(p => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt
  })));
});

// Newsletter subscription
app.post('/subscribe', (req, res) => {
  const { email } = req.body;
  if (!subscribers.find(s => s.email === email)) {
    subscribers.push({ email, subscribedAt: new Date() });
  }
  res.json({ success: true, message: 'Successfully subscribed!' });
});

// Contact form
app.post('/contact', (req, res) => {
  res.json({ success: true, message: 'Message sent successfully!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404 - Page Not Found',
    user: req.session.userId ? users.find(u => u.id === req.session.userId) : null,
    categories
  });
});

// Create uploads directory if it doesn't exist
if (!fs.existsSync('public/uploads')) {
  fs.mkdirSync('public/uploads', { recursive: true });
}

app.listen(config.port, () => {
  console.log(`🚀 JJ Blog Server running on http://localhost:${config.port}`);
  console.log(`📝 Admin login: admin@jjblog.com / password`);
});