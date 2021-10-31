const mongoose = require("mongoose")

const url = 'mongodb+srv://test-node:P0YZ8PDrfRSsV65Y@cluster0.sikq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

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