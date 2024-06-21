const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const generateToken = require('../utils/token');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    // const { name, email, password, phone, country, gender, dateOfBirth, picture } = req.body;
    // console.log(req.body);
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        res.status(400)
        throw new Error('User already exists')
    } else {
        const user = await User.create({
            name, 
            email, 
            password, 
        })
        if (user) {
            generateToken(res, user._id)
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
            })
        } else {
            res.status(400)
            throw new Error('Invalid User Details')
        }
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
});

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({ message: 'User Logged Out'})
})

const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        phone: req.user.phone,
        country: req.user.country,
        gender: req.user.gender,
        dateOfBirth: req.user.dateOfBirth
    }
    res.status(200).json(user)
})

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.phone = req.body.phone || user.phone
        user.country = req.body.country || user.country
        user.gender = req.body.gender || user.gender
        user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth

        if (req.body.password) {
            user.password = req.body.password
        }
        const updatedUser = await user.save()
        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            phone: updatedUser.phone,
            country: updatedUser.country,
            gender: updatedUser.gender,
            dateOfBirth: updatedUser.dateOfBirth,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

module.exports = { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }