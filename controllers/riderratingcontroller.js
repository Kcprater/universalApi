let router = require('express').Router(); //not being used?
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let RiderRating = sequelize.import('../models/rider');

router.post ('/', function(req,res){

  let nameOfRide = req.body.riderrating.nameOfRide;
  let ratingType = req.body.riderrating.type
  let owner = req.user.id;

  RiderRating.create({
    nameOfRide: nameOfRide,
    ratingType: ratingType,
    owner: owner,

  }).then(
    function createSuccess(riderrating) {

      res.json({
        riderrating: riderrating,
        message: 'created',
      });
    },
    function createError(err) {
      res.send(500, err.message)
    }
  )
})

router.get('/', function(req, res){
    let userid = req.user.id
  RiderRating.findAll({ where: { owner: userid}})
  .then(
    function findAllSuccess(data){
      res.json(data);
    }, 
    function findAllError(err){
      res.send(500, err.message)
    }
  )
})

module.exports = router;