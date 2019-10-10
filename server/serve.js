const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
  console.log('request come', request.url);

  const html = fs.readFileSync('test.html', 'utf8')
  response.writeHead(200, {
    // text/plain就直接将test.html以文本格式输出到页面
    // 'Content-Type': 'text/plain'
    // text/html默认的
    'Content-Type': 'text/html'
  })
  response.end(html)
}).listen(8888);

console.log('server listening 8888.')