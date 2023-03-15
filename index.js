const express = require("express");
const mongoose = require("mongoose");
const RestaurantRoute = require("./routes/restaurantRoute");
const MenuRoute = require("./routes/menuRoute");
const app = express();


require('dotenv').config();
const cors = require('cors');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.use("/cms/restaurant", RestaurantRoute);
app.use('/cms/restaurant/menu', MenuRoute);
app.use(express.static('public'));


// mongodb+srv://cms:client@cluster0.x5iici2.mongodb.net/cmsdb
const connectAPP = process.env.MONGODB_URL;

mongoose
    .connect(connectAPP, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        let port = process.env.PORT;
        if (port == null || port == "") {
            port = 8000;
        }
        console.log("successfully listening on port after connection", port)
        app.listen(port);
    }).catch((e) => {
        console.log("error", e.message);
    })