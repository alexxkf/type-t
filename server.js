const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// const router = require("./router");

// DB Setup
mongoose.connect('mongodb://localhost/TYPE', { useNewUrlParser: true })

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

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
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);