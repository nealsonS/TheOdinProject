const express = require("express");
const app = express();

const path = require("node:path");
const { text } = require("node:stream/consumers");
const PORT = 3000;

// boilerplate for forms
/*
extended: Determines how the parsing is handled.
true: Uses the qs library, which supports rich objects and arrays in URL-encoded data.
false: Uses the querystring library (built into Node.js), which is simpler and does not support nested objects.
*/
app.use(express.urlencoded({ extended: true }));

// setting assets path (usually public folder)
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// set view engine as EJS and view folder
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", {
    message: "EJS rocks!",
    name: "Type your name!",
    links: links,
    users: users,
  });
});

app.get("/about", (req, res) => res.render("about"));
app.post("/", (req, res) => res.json(req.body));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
