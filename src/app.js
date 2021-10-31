const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const connectDb = require('./db')

const PORT = process.env.PORT || 8080

connectDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.post('/', (req, res) => {
  const data = req.body
  console.log(data)
  console.log(typeof data)
  res.json({ message: 'recived data...' })
})

app.use(routes)

app.listen(PORT, () => {
  console.log('Running server...', PORT)
})