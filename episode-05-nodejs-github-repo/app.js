require("./xyz");
const data = require("./data");
const util = require("node:util");
const { calculateSum, multiply } = require("./calculate");

calculateSum(10, 20);
multiply(10, 20);
console.log(data);
console.log(util);
