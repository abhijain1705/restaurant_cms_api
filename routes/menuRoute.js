const express = require("express");
const routes = express.Router();
const { addItem, removeItem, getRestaurantMenu } = require("../controllers/menuController");


routes.post("/remove", removeItem);
routes.get('/restaurantMenu/:restaurantId/:page', getRestaurantMenu);

// Add error handling middleware for the /addOrUpdate route
routes.post("/addOrUpdate", addItem);

module.exports = routes;
