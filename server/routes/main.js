const router = require("express").Router();
const User = require("../models/user");

router.get('/', (req, res) => {
  User.find()
    .sort({ dateAdded: "asc" })
    .exec((err, user) => {
      if (err) {
        console.log(err);
      } else {
        let days = {};

        for (i = 0; i < user.length; i++) {

          if (user[i].Date) {
            if (!days[user[i].Date]) {
              days[user[i].Date] = { high: 0, low: 1000, average: 0, numItems: 0 };
            }

            if (user[i].Value > days[user[i].Date].high) {
              days[user[i].Date].high = user[i].Value
            }

            if (user[i].Value < days[user[i].Date].low) {
              days[user[i].Date].low = user[i].Value
            }

            days[user[i].Date].average += user[i].Value
            days[user[i].Date].numItems++;
          }
        }

        let daysKeys = Object.keys(days);
        for (i = 0; i < daysKeys.length; i++) {
          days[daysKeys[i]].average /= days[daysKeys[i]].numItems
        }


        // let high = 0
        // let low = 1000
        // let average = 0

        // for (i = 0; i < user.length; i++) {
        //   if (user[i].Value > high) {
        //     high = user[i].Value
        //   }
        //   if (user[i].Value < low) {
        //     low = user[i].Value
        //   }
        //   average += user[i].Value
        // }
        // average = average / user.length
        res.send(days)
      }


    })
});

// creates new post
router.post('/', (req, res) => {
  let insulin = bglValue - 100 / 50
  const newPost = new Post({
    bgl: req.body.Value,
    day: req.body.date,
    carbs: []
  })

  newPost.save((err) => {
    if (err) throw (err)
  })

  res.send(`New BGL has been added! ${newPost}`)

})

module.exports = router