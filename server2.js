const { default: axios } = require('axios');
const express = require('express');
const app = express();
const uri = `http://localhost:1111/handlesum?counter1=2000&counter2=2000`;
app.get('/', (req, res) => {
  res.json('welcome to server2.js');
});
// axios
// .get(uri)
// .then((response = console.log(response)))
// .catch((err = console.log(err)));
async function getSumResultFromServerOne() {
  try {
    const response = await axios.get(uri);
    console.log(response?.data);
  } catch (err) {
    console.log(err);
  }
}
getSumResultFromServerOne();
app.listen(2222, () => {
  console.log('server2222 is running');
});
