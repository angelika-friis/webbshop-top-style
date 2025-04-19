const express = require('express');
const router = express.Router();
const { registerUser, login } = require('../controllers/authController');
const authenticateUser = require("../middleware/authMiddleware");

router.post('/register', registerUser);
router.post('/login', login);
router.get('/me', authenticateUser, (req, res) => {
    res.json({ username: req.user.username });
});

module.exports = router;