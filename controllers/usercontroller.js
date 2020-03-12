let express = require("express"); //UPDATED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let router = express.Router();
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let bcrypt = require("bcryptjs");
let jwt = require('jsonwebtoken');


//Create New Account
router.post('/', function (req, res) { 

  // let email = req.body.user.email;
  let pass = req.body.user.password;//passwordhash???????

  User.create({
    email: req.body.user.email,
    passwordhash: bcrypt.hashSync(pass, 10),

  }).then(
    function createSuccess(user) {

      let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

      res.json({
        user: user,
        message: 'Account successfully created!',
        sessionToken: token
      })
    },
    function createError(err) {
      res.send(500, err.message)
    }
  )
})

//Login to account
router.post('/', function(req, res) {
  
  User.findOne({where: {email: req.body.user.email}}
    ).then(function(user) {
      if (user) {
        bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
          if (matches) {
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
            res.json({
              user: user,
              message: "Password successfully authenticated!",
              sessionToken: token,
            });
          } else {
            res.status(502).send({error: "Incorrect Password"})
          }
        });
      } else {
        res.status(500).send({error: "Incorrect Username"});
      }
    },
    function (err) {
      res.status(501).send({error: "Something went wrong"});
    }
  );
});

module.exports = router;

