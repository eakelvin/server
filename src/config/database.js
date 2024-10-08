require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI

const connectDatabase = async () => {
    try {
        const connect = await mongoose.connect(MONGO_URI);
        if (connect.connection.host) {
            console.log("Database Connected To Server");
        }
        // console.log(`Database Connected to ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
};

module.exports = connectDatabase