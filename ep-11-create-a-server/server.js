const http = require("http");
const server = http.createServer((req, res) => {
  res.end("welcome to namaster-nodejs");
});
server.listen(5555);
