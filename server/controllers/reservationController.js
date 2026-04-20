const reservations = [];

const createReservation = (req, res) => {
  const { fullName, email, phone, guests, date, time, specialRequests } = req.body;
  const reservation = {
    id: Date.now().toString(),
    fullName,
    email,
    phone,
    guests: Number(guests),
    date,
    time,
    specialRequests: specialRequests || '',
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  reservations.push(reservation);
  res.status(201).json({
    success: true,
    message: 'Reservation received! We will confirm shortly.',
    data: reservation,
  });
};

const getReservations = (_req, res) => {
  res.json({ success: true, data: reservations });
};

module.exports = { createReservation, getReservations };
