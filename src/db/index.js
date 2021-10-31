const mongoose = require("mongoose")
require('dotenv').config()
const DB_NAME = process.env.DB_NAME
const DB_PASSWORD = process.env.DB_PASSWORD

const url = `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@cluster0.sikq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const connectDb = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (err) => {
      if (err) {
        console.log(err)
      }

      console.log("Mongoose is connected")
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDb