const User = require('../models/User');
const bcrypt = require('bcryptjs');

const updateUser = async (req, res) => {
    const userIdFromToken = req.user.id;
    const userIdFromParams = req.params.id;

    if (userIdFromToken !== userIdFromParams) {
        return res.status(403).json({ message: "Not authorized to update this account's information" });
    }

    const { username, password } = req.body;

    if (!username && !password) {
        return res.status(400).json({ message: "No information provided to update" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: 'Username is already taken' });

    try {
        const newUserInfo = {};

        if (username) {
            newUserInfo.username = username;
        }

        if (password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            newUserInfo.password = hashedPassword;
        }

        const updatedUser = await User.findByIdAndUpdate(
            userIdFromParams,
            { $set: newUserInfo },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

module.exports = { updateUser };