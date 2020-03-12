const router = require('express').Router();
const List = require('../db').import('../models/ridelist');
const validateSession = require('../middleware/validate-session');

router.get('/', (req, res) => {
  List.findAll()
    .then(list => res.status(200).json(list))
    .catch(err => res.status(500).json ({
      error: err
    }))
})

router.post ('/', validateSession, (req,res) => {

  console.log(req.body)

  let nameOfRide = req.body.list.nameOfRide;
  let location = req.body.list.location;
  let park = req.body.list.park;
  let type = req.body.list.type;
  let minimumHeight = req.body.list.minimumHeight;

  List.create({
    nameOfRide: nameOfRide,
    location: location,
    park: park,
    type: type,
    minimumHeight: minimumHeight,

  }).then(
    function createSuccess(list) {

      res.json({
        list: list,
        message: 'created',
      });
    },
    function createError(err) {
      res.send(500, err.message)
    }
  );
});

module.exports = router;

// let express = require("express");
// let router = express.Router();
// let sequelize = require("../db");
// let List = sequelize.import("../models/ridelist");

// router.get("/", function (req, res) {
//     List.findAll().then(
//         function findAllSuccess(data) {
//             res.json(data)
//         },
//         function findAllError(err) {
//             res.send(500, err.message)
//         }
//     )
// })

// module.exports = router;