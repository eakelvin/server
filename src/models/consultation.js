const mongoose = require('mongoose')

const ConsultationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    healthcare: {
        type: String,
        required: true
    },
    consultation: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },

}, {timestamps: true})

const Consultation = mongoose.model('Consultation', ConsultationSchema);
module.exports = Consultation