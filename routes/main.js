import express from 'express';
import { posts, categories, users, comments, userLikes } from '../models/data.js';
import moment from 'moment';

const router = express.Router();

// Home page
router.get('/', (req, res) => {
  const featuredPosts = posts.filter(p => p.published && p.featured).slice(0, 3);
  const recentPosts = posts.filter(p => p.published).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6);
  const popularPosts = posts.filter(p => p.published).sort((a, b) => b.views - a.views).slice(0, 5);
  
  res.render('index', {
    title: 'JJ Blog - Home',
    user: req.session.userId ? users.find(u => u.id === req.session.userId) : null,
    featuredPosts,
    recentPosts,
    popularPosts,
    categories,
    moment
  });
});

// Blog listing
router.get('/blog', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 6;
  const offset = (page - 1) * limit;
  const category = req.query.category;
  const search = req.query.search;
  
  let filteredPosts = posts.filter(p => p.published);
  
  if (category) {
    filteredPosts = filteredPosts.filter(p => p.category === category);
  }
  
  if (search) {
    filteredPosts = filteredPosts.filter(p => 
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.content.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    );
  }
  
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);
  const paginatedPosts = filteredPosts.slice(offset, offset + limit);
  
  res.render('blog', {
    title: 'JJ Blog - All Posts',
    user: req.session.userId ? users.find(u => u.id === req.session.userId) : null,
    posts: paginatedPosts,
    categories,
    currentPage: page,
    totalPages,
    category,
    search,
    moment
  });
});

// Single post
router.get('/post/:slug', (req, res) => {
  const post = posts.find(p => p.slug === req.params.slug && p.published);
  if (!post) {
    return res.status(404).render('404', { 
      title: 'Post Not Found',
      user: req.session.userId ? users.find(u => u.id === req.session.userId) : null,
      categories
    });
  }
  
  // Increment views
  post.views++;
  
  const postComments = comments.filter(c => c.postId === post.id);
  const relatedPosts = posts.filter(p => 
    p.published && 
    p.id !== post.id && 
    (p.category === post.category || p.tags.some(tag => post.tags.includes(tag)))
  ).slice(0, 3);
  
  const user = req.session.userId ? users.find(u => u.id === req.session.userId) : null;
  const userHasLiked = user && userLikes[user.id] && userLikes[user.id].includes(post.id);
  
  res.render('post', {
    title: post.title + ' - JJ Blog',
    user,
    post,
    comments: postComments,
    relatedPosts,
    userHasLiked,
    categories,
    moment
  });
});

// About page
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About - JJ Blog',
    user: req.session.userId ? users.find(u => u.id === req.session.userId) : null,
    categories
  });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact - JJ Blog',
    user: req.session.userId ? users.find(u => u.id === req.session.userId) : null,
    categories
  });
});

export default router;