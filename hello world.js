console.log("Hello World from Node.js");
const http = require('http');
http.createServer((req, res) => {
res.end("Welcome to Node.js Server");
}).listen(3000);
console.log("Server running on port 3000");
