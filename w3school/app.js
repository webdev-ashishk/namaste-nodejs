// http module - create http server
const http = require("http");
const fs = require("fs");
const url = require("url");
/*
http
  .createServer((req, res) => {
    res.end("this is response of server");
  })
  .listen(4000);
  */
// File System module
// ----- read a file ----------
fs.readFile("./textData.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File data ====>" + data);
});
// ------ create a file -------
/*
fs.mkdir("./fsfile1", (err) => {
  if (err) throw err;
});

fs.mkdir("./fsfile2", (err) => {
  if (err) throw err;
});

fs.mkdir("./fsfile3", (err) => {
  if (err) throw err;
});
// ---- rename a file -----
fs.rename("./fsfile3", "./nfsFile3", (err) => {
  if (err) throw err;
});

// ---- delete a file -----
fs.rmdir("./fsfile2", (err) => {
  if (err) throw err;
});

*/
// //////////////////////URL modules/////////////////////////////
const urlData = url.parse(
  "http://localhost:8080/default.htm?year=2017&month=february",
  true
);
console.log("PORT NAME=======>" + urlData.port);
console.log("PATHNAME NAME=======>" + urlData.pathname);
console.log("SEARCH NAME=======>" + urlData.search);
console.log("HOST NAME=======>" + urlData.hostname);
// npm
// Events

// upload files
// Emails
