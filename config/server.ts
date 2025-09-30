// path: astacipta-backend/config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // Tambahkan blok ini untuk memberitahu Strapi URL publiknya
  url: env('PUBLIC_URL', 'http://localhost:1337'),
});