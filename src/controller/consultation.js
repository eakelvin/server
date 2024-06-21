const Consultation = require('../models/consultation');

const createConsultation = async(req, res) => {
    try {
        const consult = await Consultation.create(req.body)
        res.status(201).json(consult)
    } catch (error) {
        // res.status(500).json({ error: 'Internal Server Error' });
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}

const AllConsultations = async(req, res) => {
    try {
        const consult = await Consultation.find()
        res.json(consult)
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
}

module.exports = { createConsultation, AllConsultations };