const router = require("express").Router();
const User = require("../models/user");

const getGraphData = (res) => {

  User.find()
    .sort({ Date: "desc" })
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
          days[daysKeys[i]].average = Math.trunc(days[daysKeys[i]].average)
        }
        res.send(days)
      }
    });
}

router.get('/bgl', (req, res) => {
  getGraphData(res)

});

router.get('/insulin', (req, res) => {
  User.find()
    .sort({ Date: "desc" })
    .exec((err, user) => {
      if (err) {
        console.log(err);
      } else {
        let daysI = {};

        for (i = 0; i < user.length; i++) {

          if (user[i].Date && user[i].Notes) {
            // console.log('pre-add', daysI)
            if (!daysI[user[i].Date]) {
              // console.log('post', user[i].Date)
              daysI[user[i].Date] = { total: 0, numItems: 0 };
            }
            daysI[user[i].Date].total += user[i].Notes
            daysI[user[i].Date].numItems++;
          }
        }

        let daysIKeys = Object.keys(daysI);
        for (i = 0; i < daysIKeys.length; i++) {
          daysI[daysIKeys[i]].total += daysI[daysIKeys[i]].numItems
        }
        console.log('insulin route', daysI)
        res.send(daysI)
      }
    }
    )
});


// creates new post
router.post('/newPost', (req, res) => {
  let newPost = new User()

  newPost.Value = req.body.Value
  newPost.Date = req.body.Date
  newPost.Notes = req.body.Notes

  newPost.save((err) => {
    if (err) throw (err)
    getGraphData(res)
  })

})

module.exports = router