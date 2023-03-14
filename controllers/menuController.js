const Menu = require('../models/menuModule');
const { v4: uuidv4 } = require('uuid');

module.exports.addItem = async (req, res) => {
    const { restaurantId, items } = req.body;

    try {
        let menu = await Menu.findOne({ restaurantId: restaurantId });
        let tempItems = items;
        for (let i = 0; i < tempItems.length; i++) {
            const foodId = uuidv4();
            let foodDoc = tempItems[i];
            foodDoc.foodId = foodId;
        }

        if (!menu) {
            // If menu doesn't exist, create a new one with the restaurantId
            menu = new Menu({ restaurantId: restaurantId, items: tempItems });
        } else {
            menu.items.push(...tempItems);
        }
        await menu.save();
        res.status(200).json({ message: 'Item added successfully', menu: menu });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding item' });
    }
};

module.exports.removeItem = async (req, res) => {
    const { restaurantId, foodIds } = req.body;

    try {
        const menu = await Menu.findOne({ restaurantId });
        if (!menu) {
            return res.status(404).json({ success: false, error: 'Menu not found' });
        }

        for (let i = 0; i < foodIds.length; i++) {
            let index = menu.items.findIndex((item) => item.foodId == foodIds[i]);
            if (index === -1) {
                return res.status(404).json({ success: false, error: 'Item not found in menu' });
            } else {
                menu.items.splice(index, 1);
            }
        }

        await menu.save();

        res.json({ success: true, message: 'Item removed from menu' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: 'Something went wrong' });
    }
};
