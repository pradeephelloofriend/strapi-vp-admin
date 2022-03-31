module.exports = {
    apps: [
      {
        name: 'strapi-vp-admin',
        cwd: '/home/ec2-user/strapi/strapi-vp-admin',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
          DATABASE_HOST: '15.207.67.236', // database Endpoint under 'Connectivity & Security' tab
          DATABASE_PORT: '3306',
          DATABASE_NAME: 'strapi_vp', // DB name under 'Configuration' tab
          DATABASE_USERNAME: 'strapi_vp', // default username
          DATABASE_PASSWORD: 'gJ4L8Ax@as22apwF',
        },
      },
    ],
  };
  