const express = require('express');
const router = express.Router();
const { updateUser } = require('../controllers/userController');
const authenticateUser = require("../middleware/authMiddleware");

router.put("/:id", authenticateUser, updateUser);

module.exports = router;