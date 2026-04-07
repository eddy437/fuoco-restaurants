const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { createReservation, getReservations } = require('../controllers/reservationController');

const reservationRules = [
  body('fullName').trim().notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('guests').isInt({ min: 1, max: 10 }).withMessage('Guests must be between 1 and 10'),
  body('date').isDate().withMessage('Valid date is required'),
  body('time').trim().notEmpty().withMessage('Time is required'),
];

router.post('/', validate(reservationRules), createReservation);
router.get('/', getReservations);

module.exports = router;
