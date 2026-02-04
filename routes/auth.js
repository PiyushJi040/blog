import express from 'express';
import bcrypt from 'bcryptjs';
import { users } from '../models/data.js';

const router = express.Router();

// Login routes
router.get('/login', (req, res) => {
  if (req.session.userId) {
    return res.redirect('/');
  }
  res.render('auth/login', { title: 'Login - JJ Blog', error: null });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user.id;
    req.session.username = user.username;
    req.session.role = user.role;
    res.redirect('/');
  } else {
    res.render('auth/login', { title: 'Login - JJ Blog', error: 'Invalid credentials' });
  }
});

// Register routes
router.get('/register', (req, res) => {
  if (req.session.userId) {
    return res.redirect('/');
  }
  res.render('auth/register', { title: 'Register - JJ Blog', error: null });
});

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  
  if (users.find(u => u.email === email)) {
    return res.render('auth/register', { title: 'Register - JJ Blog', error: 'Email already exists' });
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length + 1,
    username,
    email,
    password: hashedPassword,
    role: 'user',
    avatar: '/images/logo.jpg',
    bio: '',
    createdAt: new Date()
  };
  
  users.push(newUser);
  req.session.userId = newUser.id;
  req.session.username = newUser.username;
  req.session.role = newUser.role;
  res.redirect('/');
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

export default router;