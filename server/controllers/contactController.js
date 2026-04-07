const contacts = [];

const createContact = (req, res) => {
  const { name, email, subject, message } = req.body;
  const contact = {
    id: Date.now().toString(),
    name,
    email,
    subject,
    message,
    replied: false,
    createdAt: new Date().toISOString(),
  };
  contacts.push(contact);
  res.status(201).json({
    success: true,
    message: 'Message received! We will get back to you within 24 hours.',
    data: contact,
  });
};

module.exports = { createContact };
