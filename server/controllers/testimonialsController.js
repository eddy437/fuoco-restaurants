const testimonials = require('../data/testimonialsData');

const getTestimonials = (_req, res) => {
  res.json({ success: true, data: testimonials });
};

module.exports = { getTestimonials };
