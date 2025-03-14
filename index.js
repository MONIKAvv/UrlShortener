const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = 8000;

// Mongodb
connectDB()
//Routes

app.listen(PORT, () => {
  console.log(`The server running successfully at PORT ${PORT}`);
})

