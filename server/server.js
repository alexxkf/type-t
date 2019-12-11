const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const keys = require('./config/keys')
const bodyParser = require('body-parser')
const http = require('http')

const app = express()

//DB Setup
mongoose.connect(keys.MONGODB_URI, { useNewUrlParser: true })

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mainRoutes = require('./routes/main')

app.use('/', mainRoutes)


//Server Setup
const port = process.env.PORT || 8000
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on:', port)