const express = require("express");
const routes = express.Router();
const { addItem, removeItem } = require("../controllers/menuController");

routes.post("/remove", removeItem);
routes.post("/addOrUpdate", addItem);

module.exports = routes;