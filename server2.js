const { default: axios } = require('axios');
const express = require('express');
const app = express();
const uri = `http://localhost:1111/handlesum?counter1=3000&counter2=2000`;
app.get('/', getSumResultFromServerOne);
async function getSumResultFromServerOne(res, res) {
  try {
    const response = await axios.get(uri);
    console.log(response?.data);
    res.json(response.data);
  } catch (err) {
    console.log(err);
  }
}
getSumResultFromServerOne();
app.listen(2222, () => {
  console.log('server2222 is running');
});
