const router = require("express").Router();
const User = require("../models/user");

router.get('/', (req, res) => {
  User.find().exec((err, user) => {
    res.send(user)
  })
});


module.exports = router