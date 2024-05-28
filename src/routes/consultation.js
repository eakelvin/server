const express = require('express')
const router = express.Router();

const { 
    createConsultation, AllConsultations
} = require('../controller/consultation');

router.post('/create', createConsultation)
router.get('/all', AllConsultations)