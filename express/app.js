require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

// parameters and query
app.get("/users", (req, res) => {
  res.send("users");
});

app.get("/users/:username", (req, res) => {
  // res.send(req.params)
  // only can send one
  res.json({
    url: "/users/:username",
    params: req.params,
    // query is the key-val pairs after ? in the url
    // separated by &
    // ex: /users/nealson?date=today&time=afternoon
    query: req.query,
  });
});

// routers
const dataRouter = require("./routes/dataRouter");
app.use("/data", dataRouter);

app.listen(PORT, () => {
  console.log(`My First Express App!\nPort: ${PORT}`);
  // console.log(process.env)
});
