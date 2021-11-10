const HOST = '0.0.0.0';
const PORT = 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(PORT, HOST, function () {
    console.log('Running CORS Anywhere on ' + HOST + ':' + PORT);
  });
