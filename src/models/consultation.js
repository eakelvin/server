const mongoose = require('mongoose')

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

function timeValidator(value) {
  return timeRegex.test(value);
}

const ConsultationSchema = new mongoose.Schema({
    patientFirst: { type: String, required: true },
    patientLast: { type: String, required: true },
    dob: { type: Date, required: true },
    email: { type: String, unique: true },
    gender: { type: String },
    location: { type: String },
    // file: { type: String },
    number: { type: String },
    // number: { type: Number },
    healthcare: { type: String, required: true },
    consultation: { type: String, required: true },
    condition: { type: String, required: true },
    consultDate: { type: Date, required: true },
    consultTime: {
        type: String, required: true,
        validate: {
          validator: timeValidator,
          message: 'Invalid time format. Expected HH:mm'
        }
    }
}, {timestamps: true})

const Consultation = mongoose.model('Consultation', ConsultationSchema);
module.exports = Consultation;