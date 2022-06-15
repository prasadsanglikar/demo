const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const User = require('../models/user')

router.get('', (req, res) => {
  res.send("get request")
})

router.post('/regitser', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err) => {
    if (err) {
      console.log(err)
    } else {
      res.status(200).send({ msg: 'Data Submitted Successfully' })
    }
  })



  //localhost:4000/api/login
  router.post('/login', (req, res) => {
    let userData = req.body 
    User.findOne({ email: userData.email }, (err, user) => {
      if (err) {
        console.log(err)
      } else {
        if (!user) {
          res.status(401).send('Invalid Email')
        } else
          if (user.password !== userData.password) {
            res.status(401).send('Invalid Password')
          } else {
            res.status(200).send({status:200,msg:'LoggedIn Successfully'})
            // let payload = { subject: user._id }
            // let token = jwt.sign(payload, 'secretKey')
            // res.status(200).send({ token })
          }
      }
    })
  })
})


module.exports = router;