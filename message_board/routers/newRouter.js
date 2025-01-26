const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("new", {
    routes: req.routes_config,
  });
});

module.exports = newRouter;
