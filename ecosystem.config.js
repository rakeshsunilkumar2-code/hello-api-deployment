module.exports = {
  apps: [
    {
      name: "hello-api",
      script: "index.js",
      instances: "max",
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
