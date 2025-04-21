const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: 'Username is already taken' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({ username, password: hashedPassword, role: 'user' })
        const savedUser = await newUser.save()

        res.status(201).json(savedUser)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'User not found' })
        };

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const accessToken = jwt.sign(
            { id: user._id.toString(), username: user.username },
            process.env.ACCESS_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_AGE }
        );

        const refreshToken = jwt.sign(
            { id: user._id.toString(), username: user.username },
            process.env.REFRESH_SECRET,
            { expiresIn: process.env.REFRESH_TOKEN_AGE }
        );

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: process.env.ACCESS_TOKEN_AGE
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: process.env.REFRESH_TOKEN_AGE
        });

        res.status(200).json({ username: user.username, token })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

const refresh = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json({ message: 'No refresh token' });

    jwt.verify(refreshToken, process.env.REFRESH_SECRET, (error, user) => {
        if (error) return res.status(403).json({ message: 'Invalid refresh token' });

        const newAccessToken = jwt.sign(
            { id: user.id, username: user.username },
            process.env.ACCESS_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_AGE }
        );

        res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: process.env.ACCESS_TOKEN_AGE
        });

        res.json({ message: 'Access token refreshed' });
    })
}

const logout = async (req, res) => {
    res.clearCookie('accessToken', {
        path: '/',
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
    });
    res.clearCookie('refreshToken', {
        path: '/',
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
    });
    res.status(200).json({ message: 'Logged out and cookie cleared.' });
}

module.exports = { registerUser, login, refresh, logout };