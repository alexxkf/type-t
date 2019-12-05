const router = require("express").Router();
const User = require("../models/user");
const Carb = require("../models/carbCount")

router.get('/', (req, res) => {
  User.find().exec((err, user) => {
    res.send(user)
  })
});

// // creates new post
// router.post('/newpost', (req, res) => {
//   const newPost = new Post({
//     bgl: req.body.bglValue,
//     category: req.body.category,
//     carbCount: [],
//   })

//   newPost.save((err) => {
//     if (err) throw (err)
//   })

//   res.send(`New BGL has been added! ${newPost}`)

// })

module.exports = router