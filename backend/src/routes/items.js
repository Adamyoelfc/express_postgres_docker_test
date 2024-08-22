const express = require('express');
const router = express.Router();
const { getItems, addItem } = require('../controllers/itemsController');

// route for getting all items
router.get('/', getItems);

// route for adding an item
router.post('/', addItem);

module.exports = router;
