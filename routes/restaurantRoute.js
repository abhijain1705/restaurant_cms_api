const express = require("express");
const routes = express.Router();
const { AddUser, LoginUser } = require("../controllers/restaurantContoller");

routes.post("/login", LoginUser);
routes.post("/signup", AddUser);

module.exports = routes;
