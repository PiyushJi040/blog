# JJ Blog - Complete Blog Web Application

A modern, feature-rich blogging platform built with Node.js, Express, and EJS following MVC architecture.

## ✨ Features

- **Modern Design**: Responsive dark theme with smooth animations
- **Rich Text Editor**: WYSIWYG editor with image upload support
- **User Authentication**: Secure login/registration with role-based access
- **Admin Dashboard**: Complete content management system
- **Real-time Search**: Instant search with live results
- **Comment System**: Interactive commenting with user engagement
- **Newsletter**: Email subscription functionality
- **SEO Optimized**: Meta descriptions and social media previews
- **Security**: Rate limiting, input sanitization, and XSS protection

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/PiyushJi040/blog.git
cd blog

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000`

**Default Admin**: admin@jjblog.com / password

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, CSS3, JavaScript
- **Security**: Helmet.js, bcryptjs, DOMPurify
- **File Upload**: Multer
- **Session**: express-session

## 📁 Project Structure

```
jj-blog/
├── src/
│   └── app.js              # Main application entry point
├── config/
│   └── config.js           # Application configuration
├── routes/
│   ├── main.js             # Main routes (home, blog, etc.)
│   └── auth.js             # Authentication routes
├── models/
│   └── data.js             # Data models and storage
├── middleware/
│   └── auth.js             # Authentication middleware
├── utils/
│   └── helpers.js          # Utility functions
├── views/                  # EJS templates
│   ├── admin/              # Admin panel views
│   ├── auth/               # Authentication views
│   ├── partials/           # Reusable components
│   └── *.ejs               # Page templates
├── public/                 # Static assets
│   ├── css/                # Stylesheets
│   ├── js/                 # Client-side JavaScript
│   ├── images/             # Images and media
│   └── uploads/            # User uploaded files
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## 🎯 Usage

1. **Register/Login** to access features
2. **Create Posts** with rich text editor
3. **Manage Content** via admin dashboard
4. **Engage** with comments and likes
5. **Search & Filter** posts by category

## 🏗️ Architecture

This project follows a modular MVC (Model-View-Controller) architecture:

- **Models**: Data structures and business logic (`models/`)
- **Views**: EJS templates for rendering HTML (`views/`)
- **Controllers**: Route handlers and application logic (`routes/`)
- **Middleware**: Authentication and request processing (`middleware/`)
- **Configuration**: App settings and environment config (`config/`)
- **Utilities**: Helper functions and shared code (`utils/`)

## 📄 License

ISC License