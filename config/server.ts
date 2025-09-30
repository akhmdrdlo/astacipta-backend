// path: astacipta-backend/config/server.js

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // Membaca kunci dari environment variable bernama APP_KEYS
    // dan membaginya menjadi array berdasarkan koma
    keys: env('APP_KEYS').split(','),
  },
});
