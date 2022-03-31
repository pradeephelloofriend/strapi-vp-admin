module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1339),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3e0d834e309470a0f8343bc92c2a281f'),
    },
  },
});
