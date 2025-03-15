const mongoose = require('mongoose');

const db = `mongodb+srv://monika:monika@testingnodemongodb.5qvsm.mongodb.net/?retryWrites=true&w=majority&appName=URLShorterner`;


const connectDB = async () => {
  try {
     await mongoose.connect(db);
    console.log(`MongoDB Connected Successfully!`);
    
  } catch (error) {
    console.error(`There is some Problems while connecting mongoDB ${error}`)
    
  }
}

module.exports = connectDB;
