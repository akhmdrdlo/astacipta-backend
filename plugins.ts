// path: astacipta-backend/config/plugins.js
module.exports = ({ env }) => ({
  // Konfigurasi plugin 'users-permissions' (jika sudah ada, biarkan)
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  // Konfigurasi BARU untuk plugin upload
  'upload': {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('CLOUDFLARE_ACCESS_KEY_ID'),
        secretAccessKey: env('CLOUDFLARE_SECRET_ACCESS_KEY'),
        endpoint: `https://${env('CLOUDFLARE_ACCOUNT_ID')}.r2.cloudflarestorage.com`,
        params: {
          Bucket: env('CLOUDFLARE_R2_BUCKET_NAME'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});