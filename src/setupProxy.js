const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use('/movieapi',
    createProxyMiddleware(
    {
        target: 'https://yts.mx/api/v2/list_movies.json?sort_by=rating',
        changeOrigin: true,
    })
  );

  app.use('/movieapi2',
    createProxyMiddleware(
    {
        target: 'https://yts-proxy.now.sh/movie_details.json?movie_id=',
        changeOrigin: true,
    })
  );

};
