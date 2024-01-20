// import http module
const http = require('node:http');
// const path = require("path");
// const fs = require("fs");
// const os = require("os");
const port = 8900;

const behavior = (req, res) => {
    //handle the following requests
    // GET /books
    // PUT /books
    // DELETE /books
    // GET /books/author/
    // POST /books/author/
    // PUT /books/author/ 
   
    if (req.method === "GET" && req.url === "/books") {
        res.writeHead(200);
        res.write("Hello from GET /books");
    } else if (req.method === "PUT" && req.url === '/books') {
        res.write("Hello from PUT /books");
    } else if (req.method === 'DELETE' && req.url === '/books') {
        res.write("Hello from DELETE /books");
    } else if (req.method === "GET" && req.url === "/books/author") {
        res.write("Hello from GET /books/author");
      } else if (req.method === "PUT" && req.url === '/books/author') {
          res.write("Hello from PUT /books/author");
      } else if (req.method === 'DELETE' && req.url === '/books/author') {
          res.write("Hello from DELETE /books/author");
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({
            message: 'Method Not Supported'
        }));
    }

    res.end();
  };

// create a server
const server = http.createServer(behavior);

server.listen(8900, null, null, () => {
  console.log(`Server running at http://localhost:${port}`);
});