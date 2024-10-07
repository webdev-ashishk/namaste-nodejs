const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const Data = require('./UserData');
const corsOptions = {
  // origin: 'http://localhost:3001' |,
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({
    message: 'welcome to NodeJS api ... List of API , /user/data',
  });
});
app.get('/user/data', (req, res) => {
  res.json({
    message: ' this is user Daata',
    data: Data,
  });
});
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
