const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
// const router = require("./router");

// DB Setup
mongoose.connect('mongodb://localhost/TYPE', { useNewUrlParser: true })

const app = express();

// set up cors to allow us to accept requests from our client
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

  next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const mainRoutes = require('./routes/main')
app.use('/', mainRoutes)

// router(app);

// if (process.env.NODE_ENV === "production") {
//   // Express will serve up production assets
//   // like our main.js file, or main.css file!
//   app.use(express.static("client/build"));

//   // Express will serve up the index.html file
//   // if it doesn't recognize the route
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// Server Setup

app.listen(8000, () => {
  console.log('Node.js listening on port ' + 8000)
})