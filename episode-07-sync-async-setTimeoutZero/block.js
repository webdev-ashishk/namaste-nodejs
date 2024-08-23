const fs = require("fs");
console.log("firstLine of code");
var a = 10;
var b = 20;
// read the file
fs.readFile("./textFile.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("FILE READING ===> DONE!");
});
// setTimeout
setTimeout(() => {
  console.log("SETTIME-OUT called!");
}, 0);
function sum(a, b) {
  const result = a + b;
  return result;
}
const c = sum(a, b);
console.log("SUM ===> " + c);
