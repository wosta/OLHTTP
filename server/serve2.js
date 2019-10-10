const http = require('http')

http.createServer(function (request, response) {
  console.log('request come', request.url);
  // 如果没有服务器同意跨域请求，那么浏览器会
  // 拦截掉，如果不在浏览器里请求，其实是不会有这跨域的问题
  // '*' 表示任何服务都可以访问
  // 'Access-Control-Allow-Origin': '*'
  // 这里表示某个网址才能访问。
  response.writeHead(200, {
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8888/'
  });
  response.end('123');

}).listen(8887);

console.log('server listening 8887.')