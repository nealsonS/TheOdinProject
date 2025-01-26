require("dotenv").config();
const path = require("node:path");

const express = require("express");
const app = express();

const indexRouter = require("./routers/indexRouter");
const newRouter = require("./routers/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = process.env.PORT || 8080;

const routes = [
  { href: "/", name: "About" },
  { href: "/new", name: "Add a new message!" },
];

app.use(
  "/",
  (req, res, next) => {
    req.routes_config = routes;
    next();
  },
  indexRouter
);
app.use(
  "/new",
  (req, res, next) => {
    req.routes_config = routes;
    next();
  },
  newRouter
);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
