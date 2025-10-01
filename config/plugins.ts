// path: astacipta-backend/config/plugins.js
module.exports = ({ env }) => ({
  // Konfigurasi plugin 'users-permissions' (jika sudah ada, biarkan)
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  // Konfigurasi plugin upload
  'upload': {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        // ==== PERBAIKAN DI SINI ====
        // Menggunakan nama environment variable standar AWS
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
        // ============================
        region: env('CLOUDFLARE_R2_REGION', 'auto'), 
        endpoint: `https://${env('CLOUDFLARE_ACCOUNT_ID')}.r2.cloudflarestorage.com`,
        params: {
          Bucket: env('CLOUDFLARE_R2_BUCKET_NAME'),
        },
      },
    },
  },
});
