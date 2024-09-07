module.exports = {
  apps: [
    {
      name: "weather",
      script: "npm run start:prod",
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
      "post-deploy":
        "npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};
