const express = require('express');
const connectDB = require('./config/db');
const URLRouter = require('./routes/url');
const {URL} = require('./models/url')

const app = express();
const PORT = 8000;

// Mongodb
connectDB()
app.use(express.json())
//Routes
app.use('/url', URLRouter)
app.get('/:shortId', async(req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate({
    shortId
  }, { $push: {
    visitHistory: {
      timestamp: Date.now()
    }
  },
} ,
)
res.redirect(entry.redirectURL)

})



app.listen(PORT, () => {
  console.log(`The server running successfully at PORT ${PORT}`);
})

