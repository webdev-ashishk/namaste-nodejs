const fs = require("node:fs");
const https = require("https");
console.log("firstLine of code");
var a = 10;
var b = 20;
// read the file
fs.readFile("./textFile.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("FILE READING ===> " + data);
});
// api call
https.get("https://jsonplaceholder.typicode.com/posts", async (res) => {
  console.log("API CALL $$$=>" + res);
});
// setTimeoutZero
setTimeout(() => {
  console.log("setTimeout is zero executed mediatly");
}, 0);
//setTimeout after 5 second
setTimeout(() => {
  console.log("after 5 second setTimeout called@");
}, 5000);

function multi(x, y) {
  const result = x * y;
  return result;
}
const c = multi(a, b);
console.log("multi result is =>" + c);
// console.log("fs");
// console.log("https module -----" + https);
// console.log(" object object conveted ===> " + JSON.stringify(https));
