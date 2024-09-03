const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    file: { 
        type: String, 
        required: true
    },

}, { timestamps: true})

const File = mongoose.model('File', fileSchema);
module.exports = File