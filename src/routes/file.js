const express = require('express');
const router = express.Router();

const { 
    createFile, 
    handleUpload, 
    getFiles 
} = require('../controller/file')

router.post('/upload', handleUpload, createFile);
router.get('/all', getFiles);

module.exports = router;