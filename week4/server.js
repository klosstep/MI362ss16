const http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("<h1>Hello World!</h1>");
  response.write("<p>This is a node app!</p>");
  response.write("</body>");
  response.write("</html>");
  response.end();
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');