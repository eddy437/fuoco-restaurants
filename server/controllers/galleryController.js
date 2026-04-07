const galleryItems = require('../data/galleryData');

const getGallery = (req, res) => {
  const { category } = req.query;
  const data = category && category !== 'all'
    ? galleryItems.filter((item) => item.category === category)
    : galleryItems;
  res.json({ success: true, data });
};

module.exports = { getGallery };
