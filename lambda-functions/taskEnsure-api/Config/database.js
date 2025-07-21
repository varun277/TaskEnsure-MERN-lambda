const mongoose = require('mongoose');
require('dotenv').config

const URI = process.env.MONGODB_URI
// Connect to mongoDb Cluster
const connectDb = async () => {
    await mongoose.connect(URI)
}

module.exports = connectDb