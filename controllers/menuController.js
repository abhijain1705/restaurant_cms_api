const Menu = require('../models/menuModule');
const { v4: uuidv4 } = require('uuid');


module.exports.addItem = async (req, res) => {

    const obj = JSON.parse(JSON.stringify(req.body))
    const { restaurantId, items } = obj;
    const { filename } = req.file;

    try {
        if (!filename || !restaurantId || !items) {
            res.status(401).json({ error: "feilds are not recieved" });
            return;
        }

        let menu = await Menu.findOne({ restaurantId: restaurantId });
        let tempItems = JSON.parse(items);
        const foodId = uuidv4();
        tempItems.foodId = foodId;
        tempItems.image = filename;

        if (!menu) {
            // If menu doesn't exist, create a new one with the restaurantId
            menu = new Menu({ restaurantId: restaurantId, items: [{ ...tempItems }] });
        } else {
            menu.items.push(tempItems);
        }
        await menu.save();
        res.status(200).json({ message: 'Item added successfully', menu: menu });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error adding item' });
    }
};

module.exports.getRestaurantMenu = async (req, res) => {
    const { restaurantId } = req.body;
    try {
        let menu = await Menu.findOne({ restaurantId: restaurantId });
        res.status(200).json({ message: 'menu sent', menu: menu });
    } catch (error) {

        res.status(500).json({ success: false, error: 'Something went wrong' });
    }
}

module.exports.removeItem = async (req, res) => {
    const { restaurantId, foodId } = req.body;

    try {
        const menu = await Menu.findOne({ restaurantId: restaurantId });
        if (!menu) {
            return res.status(404).json({ success: false, error: 'Menu not found' });
        }

        let index = menu.items.findIndex((item) => item.foodId == foodId);
        if (index === -1) {
            return res.status(404).json({ success: false, error: 'Item not found in menu' });
        } else {
            menu.items.splice(index, 1);
        }
        await menu.save();

        res.json({ success: true, message: 'Item removed from menu' });
    } catch (error) {

        res.status(500).json({ success: false, error: 'Something went wrong' });
    }
};
