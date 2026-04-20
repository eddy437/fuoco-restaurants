const express = require('express');
const router = express.Router();
const { getMenu, getMenuByCategory } = require('../controllers/menuController');

router.get('/', getMenu);
router.get('/:category', getMenuByCategory);

module.exports = router;
