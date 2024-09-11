const Subscribe = require('../models/subscribe');

const createSubscribe = async(req, res) => {
    try {
        const subscribe = await Subscribe.create(req.body)
        res.status(201).json(subscribe)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const allSubscribers = async(req, res) => {
    try {
        const subscribers = await Subscribe.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({ error: 'Server Error'})
    }
};

module.exports = { createSubscribe, allSubscribers }