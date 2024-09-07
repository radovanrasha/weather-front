module.exports = {
  apps: [
    {
      name: "weather",
      script: "npm",
      args: "run start:prod", // Run npm start:prod through PM2
      port: 3001,
      time: true,
    },
  ],
  deploy: {
    production: {
      user: "dev",
      host: "161.97.65.149",
      key: "radovanrasha.pem",
      ref: "origin/master",
      repo: "git@github.com:radovanrasha/weather-front.git",
      path: "/home/dev/weather",
      env: {
        NODE_ENV: "production",
      },
      "post-deploy": "pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};
