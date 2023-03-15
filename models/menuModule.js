const mongoose = require('mongoose');

const schema = mongoose.Schema({
    restaurantId: { type: String },
    items: [{
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        image: { type: String },
        category: { type: String },
        flavour: { type: String },
        foodId: { type: String },
        parent: { type: String },
    }]
}); 

module.exports = mongoose.model("menu", schema);
