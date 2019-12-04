const router = require("express").Router();
const User = require("../models/user");

router.get('/', (req, res) => {
  res.send('Hello world!');
});


module.exports = router