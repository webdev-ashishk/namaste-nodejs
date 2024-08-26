const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/handlesum", (req, res) => {
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
});
app.get("/handlesumqueryparams", (req, res) => {
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
});
app.post("/handlesumheadercounter", (req, res) => {
  let counter = req.headers.counter;
  let sum = 0;
  function calculateSum(n) {
    for (i = 0; i <= n; i++) {
      sum = sum + i;
    }
  }
  calculateSum(counter);
  res.send("handle-sum-header-counter===>" + sum);
});
app.post("/handlesumbodycounter", (req, res) => {
  let counter = req.body.counter;
  let sum = 0;
  function calculateSum(n) {
    for (i = 0; i <= n; i++) {
      sum = sum + i;
    }
  }
  calculateSum(counter);
  res.send("handle-sum-header-counter===>" + sum);
});
app.get("/handleaddition", (req, res) => {
  const x = req.query.a;
  const y = req.query.b;
  function addition(a, b) {
    const result = a + b;
    res.send("addtion result is ===> " + result);
  }
  addition(x, y);
});
app.get("/handlemultiplication", (req, res) => {
  const x = req.query.x;
  const y = req.query.y;
  function multiply(x, y) {
    return x + y;
  }
  const mulResult = multiply(x, y);
  res.send("multiplication result is ***** " + mulResult);
  // res.send("handleMultiplication");
});

// recieving frontend data
app.post("/handlefrontenddata", (req, res) => {
  const bodyData = req.body;
  console.log(bodyData);
  res.send("handle frontend data!");
});
app.get("/projects", (req, res) => {
  res.send("LIST OF PROJECT HERE!!!!!!!!!!");
});
app.get("/skills", (req, res) => {
  res.send("LIST OF SKILLS CAME IN THIS CATEGORY!");
});
app.get("/api/users", (req, res) => {
  res.json([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
  ]);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
