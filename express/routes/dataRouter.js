const { Router } = require("express");

const dataRouter = Router();

dataRouter.get("/", (req, res) => res.send("data"));
dataRouter.get("/:dataID", (req, res) => res.send(req.params.dataID));

module.exports = dataRouter;
