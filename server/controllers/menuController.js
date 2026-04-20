const menuItems = require('../data/menuData');

const getMenu = (_req, res) => {
  const categories = ['starters', 'pizza', 'pasta', 'mains', 'desserts', 'drinks'];
  const grouped = categories.reduce((acc, cat) => {
    acc[cat] = menuItems.filter((item) => item.category === cat);
    return acc;
  }, {});
  res.json({ success: true, data: menuItems, grouped });
};

const getMenuByCategory = (req, res) => {
  const { category } = req.params;
  const items = menuItems.filter((item) => item.category === category);
  if (!items.length) {
    return res.status(404).json({ success: false, message: 'Category not found' });
  }
  res.json({ success: true, data: items });
};

module.exports = { getMenu, getMenuByCategory };
