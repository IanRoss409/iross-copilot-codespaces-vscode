// cresate web server
// 1. create a web server
// 2. create a route
// 3. create a function that returns a response
// 4. send a response

// 1. create a web server
const http = require('http');
const server = http.createServer();

// 2. create a route
server.on('request', (req, res) => {
  // 3. create a function that returns a response
  // 4. send a response
  res.end('Hello, world!');
});

server.listen(3000, () => {
    console.log('Server is running...');
  });