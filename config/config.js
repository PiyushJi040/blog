export const config = {
  port: process.env.PORT || 3000,
  sessionSecret: 'jj-blog-secret-key-2024',
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100
  }
};