const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json('Welcome to Server1');
});
app.get('/handleSum', (req, res) => {
  const counter1 = req.query.counter1;
  const counter2 = req.query.counter2;
  const n1 = Number(counter1);
  const n2 = Number(counter2);
  function sum(c1, c2) {
    return c1 + c2;
  }
  const sumOfTwoNumber = sum(n1, n2);
  res.json(sumOfTwoNumber);
});
app.listen(1111, () => {
  console.log('server1 is connected successfully');
});
