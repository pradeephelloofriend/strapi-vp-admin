module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '15.207.67.236'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi_vp'),
        username: env('DATABASE_USERNAME', 'strapi_vp'),
        password: env('DATABASE_PASSWORD', 'gJ4L8Ax@as22apwF'),
        //ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
