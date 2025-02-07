const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const multer = require('multer');
const { sendCredentialEmail } = require('../utils/email');

const upload = multer({ dest: 'uploads/' });

// Sign Up Route
router.post('/signup', upload.single('photo'), async (req, res) => {
  const { name, age, email } = req.body;
  const photo = req.file.path;

  try {
    const memberCount = await Member.countDocuments();
    const memberNumber = `00${memberCount + 1}`.slice(-3);

    const newMember = new Member({ name, age, email, photo, memberNumber });
    await newMember.save();

    // Send email with credential
    await sendCredentialEmail(email, name, memberNumber, photo);

    res.status(201).json({ message: 'Member created successfully', memberNumber });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;