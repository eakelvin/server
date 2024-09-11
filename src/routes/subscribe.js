const express = require('express');
const router = express.Router();

const { 
    createSubscribe, 
    allSubscribers 
} = require('../controller/subscribe');

router.post('/create', createSubscribe);
router.get('/all', allSubscribers);

module.exports = router;