const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: Number },
    subject: { type: String},
    message: { type: String, required: true}
})

const Message = mongoose.model('Message', messageSchema)
module.exports = Message