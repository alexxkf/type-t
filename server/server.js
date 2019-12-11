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


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


//Server Setup
const port = process.env.PORT || 8000
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on:', port)