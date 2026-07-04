const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;
const connectDB = async ()=>{
    await mongoose.connect(mongoURI);
    console.log("connected with db")
}
module.exports = connectDB;