const express = require('express');
const Contact = require('../Database/contact');

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { Name, Email, Message } = req.body;

  if (!Name || !Email ||  !Message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newContact = new Contact({ Name, Email, Message });
    await newContact.save();
    res.status(200).json({ message: '✅ ThankYou, I will Contact you Soon!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: '❌ Sorry Our Server is currently ShutDown.' });
  }
});

module.exports = router;
