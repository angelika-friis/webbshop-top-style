const express = require('express');
const router = express.Router();
const { registerUser, login, refresh, logout } = require('../controllers/authController');
const authenticateUser = require("../middleware/authMiddleware");

router.post('/register', registerUser);
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/logout', logout);
router.get('/me', authenticateUser, (req, res) => {
    res.json({ username: req.user.username });
});

module.exports = router;