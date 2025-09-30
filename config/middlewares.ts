module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://astacipta-dashboard.vercel.app', // <-- PASTIKAN INI BENAR
      ],
      headers: '*',
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