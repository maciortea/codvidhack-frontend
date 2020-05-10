const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/company', '/unemployed'],
    createProxyMiddleware({
      target: 'http://51.15.222.108:8000',
      changeOrigin: true,
    })
  );
};
