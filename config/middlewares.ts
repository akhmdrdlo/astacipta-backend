// path: astacipta-backend/config/middlewares.js

module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      // Daftar lengkap alamat yang diizinkan untuk mengakses API Anda
      origin: [
        'http://localhost:1337', // Strapi lokal
        'http://localhost:3000', // Next.js lokal
        '[https://astacipta-dashboard.vercel.app](https://astacipta-dashboard.vercel.app)', // <-- PERBAIKAN DI SINI (sekarang dalam format string yang benar)
      ],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
