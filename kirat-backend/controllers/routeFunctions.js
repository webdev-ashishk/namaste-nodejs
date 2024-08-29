// Todo : ✅ takes users data and resolve it in address :
const userData = require("../usersData");
const handleSum = (req, res) => {
  const counter = 5000;
  let sum = 0;
  function calculateSum(counter) {
    for (i = 0; i <= counter; i++) {
      sum = sum + i;
    }
    console.log("sum is called!" + counter);
  }
  calculateSum(counter);
  // res.send(`sum result is ${sumResult}`);
  res.send("handle sum called! ===>" + sum);
};
const handleSumQueryParams = (req, res) => {
  const counter = req.query.counter;
  let sum = 0;
  function calculateQueryParams(n) {
    for (i = 0; i <= n; i++) {
      sum = sum + i;
    }
  }
  console.log("handlequeryparams====>" + sum);
  calculateQueryParams(counter);
  res.send("handle-sum-query-params ====> " + sum);
};
const handleSumHeaderCounter = (req, res) => {
  let counter = req.headers.counter;
  let sum = 0;
  function calculateSum(n) {
    for (i = 0; i <= n; i++) {
      sum = sum + i;
    }
  }
  calculateSum(counter);
  res.send("handle-sum-header-counter===>" + sum);
};
const handleSumBodyCounter = (req, res) => {
  let counter = req.body.counter;
  let sum = 0;
  function calculateSum(n) {
    for (i = 0; i <= n; i++) {
      sum = sum + i;
    }
  }
  calculateSum(counter);
  res.send("handle-sum-header-counter===>" + sum);
};

const handleAddition = (req, res) => {
  const x = req.query.a;
  const y = req.query.b;
  function addition(a, b) {
    const result = a + b;
    res.send("addtion result is ===> " + result);
  }
  addition(x, y);
};
const handleMultiplication = (req, res) => {
  const x = req.query.x;
  const y = req.query.y;
  function multiply(x, y) {
    return x + y;
  }
  const mulResult = multiply(x, y);
  res.send("multiplication result is ***** " + mulResult);
  // res.send("handleMultiplication");
};

const handleFrontEndData = (req, res) => {
  const bodyData = req.body;
  console.log(bodyData);
  res.send("handle frontend data!");
};

const handleSkills = (req, res) => {
  res.send("LIST OF SKILLS CAME IN THIS CATEGORY!");
};

const handleUsers = (req, res) => {
  res.json(userData);
};

const handleUsersDynamicID = (req, res) => {
  const userID = req.params.userid;
  function _filterData(element) {
    const result = element.id == userID;
    return result;
    // console.log();
  }
  function filterByID(userData) {
    const result = userData.filter(_filterData);
    return result;
  }
  const filteredData = filterByID(userData);
  res.json(filteredData);
  console.log("filtedData==>" + filteredData);
};

module.exports = {
  handleSum,
  handleSumQueryParams,
  handleSumHeaderCounter,
  handleSumBodyCounter,
  handleAddition,
  handleMultiplication,
  handleFrontEndData,
  handleSkills,
  handleUsers,
  handleUsersDynamicID,
};
