let router = require('express').Router();
let sequelize = require('../db.js');
let User = sequelize.import('../models/user');
let Rating = sequelize.import('../models/rating');

router.post ('/', function(req,res){

  // console.log(req.body)
  let nameOfRide = req.body.rating.nameOfRide;
  let date = req.body.rating.date;
  let waitTime = req.body.rating.waitTime;
  let rideRating = req.body.rating.rideRating;
  let comments = req.body.rating.comments;
  let user = req.user;

  Rating.create({
    nameOfRide: nameOfRide,
    date: date,
    waitTime: waitTime,
    rideRating: rideRating,
    comments: comments,
    owner: user.id,

  }).then(
    function createSuccess(rating) {
      res.json({
        rating: rating,
        message: 'Rating Created', //change to alerts??????????
      });
    },
    function createError(err) {
      res.send(500, err.message)
    }
  );
})

router.get('/', function(req, res){
  let userid = req.user.id;
  Rating.findAll({ where: {owner: userid}})
    .then(			
      function findAllSuccess(data){
      res.json(data)
    },
    function findAllError(err){
      res.send(500, err.message)
    }
  )
})

router.delete('/:id', function(req, res){
	let dataID = req.params.id;

	Rating.destroy({ where: {id: dataID }}).then(
		function deleteRatingSuccess(data){
			res.send("You removed a Rating!");
		},
		function deleteRatingError(err){
			res.send(500, err.message)
		}
	)
})

router.get('/:id', function(req, res){
	let dataID = req.params.id;
	Rating.findOne({ where: {id: dataID }}).then(
		function getSuccess(data){
			res.json(data)
		},

		function getError(err){
			res.send(500, err.message)
		}
	)
})

router.put('/:id', function(req,res){
	let nameOfRide = req.body.rating.nameOfRide;
  let date = req.body.rating.date; 
  let waitTime = req.body.rating.waitTime;
  let rideRating = req.body.rating.rideRating; 
  let comments = req.body.rating.comments; 
  let data = req.params.id

  Rating.update({
    nameOfRide: nameOfRide,
    date: date,
    waitTime: waitTime,
    rideRating: rideRating,
    comments: comments,
	}, {where: {id : data}}).then(
		function updateSuccess(updateData){
			res.json(updateData)
		},
		function updateError(err){
			res.send(500, err.message)
		}
	)
})
module.exports = router;