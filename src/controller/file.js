const File = require('../models/file');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, "./files")   
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
});

const upload = multer({storage});
const handleUpload = upload.single('file');

const createFile = async(req, res) => {
    try {
        const file = await File.create({ file: req.file.filename });
        console.log('RF:', req.file);
        res.status(200).json({ 
            message: 'File uploaded successfully', 
            file
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getFiles = async(req, res) => {
    try {
        const file = await File.find({})
        res.json(file)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createFile, handleUpload, getFiles }