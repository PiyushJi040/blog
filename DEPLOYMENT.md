# Deployment Guide

## GitHub Upload Steps

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Clean blog application"
   ```

2. **Connect to GitHub Repository**
   ```bash
   git remote add origin https://github.com/PiyushJi040/blog.git
   git branch -M main
   git push -u origin main
   ```

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Access Application**
   - URL: http://localhost:3000
   - Admin Login: admin@jjblog.com / password

## Production Deployment

### Heroku
```bash
# Install Heroku CLI and login
heroku create your-blog-name
git push heroku main
```

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel
vercel
```

### Railway
```bash
# Connect GitHub repository to Railway
# Deploy automatically on push
```

## Environment Variables

For production, set these environment variables:
- `PORT`: Server port (default: 3000)
- `SESSION_SECRET`: Secure session secret key

## File Structure (Clean)

```
blog/
├── src/app.js              # Main application
├── config/config.js        # Configuration
├── routes/                 # Route handlers
├── models/data.js          # Data storage
├── middleware/auth.js      # Authentication
├── utils/helpers.js        # Utilities
├── views/                  # EJS templates
├── public/                 # Static assets
└── package.json           # Dependencies
```