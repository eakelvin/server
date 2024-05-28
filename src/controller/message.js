const Message = require('../models/message')

const createMessage = async(req, res) => {
    try {
        const message = await Message.create(req.body)
        res.status(201).json(message)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAllMessages = async(req, res) => {
    try {
        const messages = await Message.find()
        res.json(messages)
    } catch (error) {
        res.status(500).json({ error: 'Server Error'})
    }
}

module.exports = { createMessage, getAllMessages }