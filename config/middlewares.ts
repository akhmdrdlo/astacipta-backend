// config/middlewares.js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
      'https://astacipta-dashboard.vercel.app',
      ],
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
      expose: ['Content-Length', 'Date', 'X-Request-Id'],
      credentials: true, // hanya kalau kamu butuh cookie/auth
      maxAge: 86400,
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];