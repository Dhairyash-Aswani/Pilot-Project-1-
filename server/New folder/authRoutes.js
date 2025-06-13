const express = require('express');
const router = express.Router();

// Dummy test route to check if it's working
router.get('/test', (req, res) => {
  res.json({ message: 'Auth route is working!' });
});

module.exports = router;
