const sumVariable = "came from sum.js";
function sumFunction(a, b, c) {
  const result = a + b + c;
  console.log(result);
}
module.exports = { sumVariable, sumFunction };
