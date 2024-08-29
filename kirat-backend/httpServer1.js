const express = require("express");
var bodyParser = require("body-parser");
const userRoutes = require("./routes/createRoutes");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", userRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
