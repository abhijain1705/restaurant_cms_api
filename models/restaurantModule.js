const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const schema = mongoose.Schema({
    restaurantName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    uniqueId: { type: String, required: true, unique: true }
});

const uniqueOptions = {
    message: 'Email already exists, please try another one'
};

schema.plugin(uniqueValidator, uniqueOptions);

module.exports = mongoose.model("restaurant", schema);
