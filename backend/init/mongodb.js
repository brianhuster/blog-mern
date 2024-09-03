const mongoose = require('mongoose');
const {mongoURI} = require("../config/keys");

const connectMongodb = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = { connectMongodb };
