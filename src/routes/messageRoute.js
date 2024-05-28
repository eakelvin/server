const express = require('express');
const router = express.Router();

const { 
    createMessage, 
    getAllMessages 
} = require('../controller/message')

router.post('/create', createMessage)
router.get('/all', getAllMessages )

module.exports = router