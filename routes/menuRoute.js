const express = require("express");
const routes = express.Router();
const { addItem, removeItem, getRestaurantMenu } = require("../controllers/menuController");

function removeImage(req, res, next) {
    const { imageName } = req.body;

    fs.unlink(`./public/uploads/${imageName}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to delete image' });
        }

        console.log(`Image ${imageName} deleted successfully`);
        next();
    });
}

// Set up Multer storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('./public/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, `image-${Date.now()}. ${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/pjg", "image/png"];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

// Create Multer middleware
const upload = multer({ storage: storage, fileFilter: fileFilter });

routes.post("/remove", removeImage, removeItem);
routes.get('/restaurantMenu', getRestaurantMenu);

// Add error handling middleware for the /addOrUpdate route
routes.post("/addOrUpdate", addItem);

module.exports = routes;
