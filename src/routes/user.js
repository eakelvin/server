const express = require('express');
const router = express.Router();

const { 
        authUser, 
        registerUser, 
        logoutUser, 
        getUserProfile, 
        updateUserProfile 
} = require('../controller/user');
const { protect } = require('../middleware/auth');

router.post('/register', registerUser)
router.post('/login', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

module.exports = router