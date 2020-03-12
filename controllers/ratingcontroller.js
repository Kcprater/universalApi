let router = require('express').Router(); //UPDATED!!!
let sequelize = require('../db.js');
let User = sequelize.import('../models/user'); //user.js??
let Rating = sequelize.import('../models/rating');//rating.js???

// router.get('/', (req, res) => {
//   Rating.findAll()
//     .then(rating => res.status(200).json(rating)) //maybe delete????????????????
//     .catch(err => res.status(500).json ({
//       error: err
//     }))
// })

router.post ('/', (req,res) => {

  // console.log(req.body)abc
  let user = req.user;
  let nameOfRide = req.body.rating.nameOfRide;
  let date = req.body.rating.date;
  let waitTime = req.body.rating.waitTime;
  let rideRating = req.body.rating.rideRating;
  let comments = req.body.rating.comments;

  Rating.create({
    rider: user.id,
    nameOfRide: nameOfRide,
    date: date,
    waitTime: waitTime,
    rideRating: rideRating,
    comments: comments,

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

router.get('/', (req, res) => {
  let userid = req.user.id;
  Rating.findAll({ where: { rider: userid}})
    .then(rating => res.status(200).json(rating))
    .catch(err => res.status(500).json({ error: err}))
})

router.delete('/:id', function(req, res){
	let ratingID = req.params.id;

	Rating.destroy({ where: {id: ratingID }}).then(
		function deleteRatingSuccess(rating){
			res.send("You removed a Rating!");
		},
		function deleteRatingError(err){
			res.send(500, err.message)
		}
	)
})

router.get('/:id', function(req, res){
	let ratingID = req.params.id;
	Rating.findOne({ where: {id: ratingID }}).then(
		function getSuccess(data){
			res.json(data)
		},

		function getError(err){
			res.send(500, err.message)
		}
	)
})

router.put('/:id', function(req,res){
	// let rider = req.params.id;
	let nameOfRide = req.body.rating.nameOfRide;
	let date = req.body.rating.date; 
  let rider = req.params.id // might need
  let rideRating = req.body.rating.rideRating; 
  let comments = req.body.rating.comments; 

  Rating.update({
    // rider: user.id,
    nameOfRide: nameOfRide,
    date: date,
    waitTime: waitTime,
    rideRating: rideRating,
    comments: comments,
	}, {where: {id : rider}}).then(
		function updateSuccess(updateData){
			res.json(updateData)
		},
		function updateError(err){
			res.send(500, err.message)
		}
	)
})
module.exports = router;

//second attempt

// router.post(`/`, function (req, res) {
//   let user = req.user.id;
//   let nameOfRide = req.body.rating.nameOfRide;
//   let date = req.body.rating.date;
//   let waitTime = req.body.rating.waitTime;
//   let rideRating = req.body.rating.rideRating;
//   let comments = req.body.rating.comments;

//   console.log(user.id)

//   Rating.create({
//       user: user,
//       nameOfRide: nameOfRide,
//       date: date,
//       waitTime: waitTime,
//       rideRating: rideRating,
//       comments: comments
//   })
//       .then(
//           function createRatingSuccess(rating) {
//               res.status(200).json({
//                   rating: rating,
//                   message: "Successfully created rating!"
//               })
//           },
//           function createRatingError(err) {
//               res.json(500, err.message)
//           }
//       )
// })

// router.delete("/:id", function (req, res) {
//   let ratingID = req.params.id;

//   Rating.findById(ratingID)
//       .then(
//           function (item) {
//               if (item == undefined) {
//                   res.send(500, "ID doesn't match")
//               } else {
//                   Rating.destroy({ where: { id: ratingID } })
//                       .then(
//                           function createDeleteSuccess() {
//                               res.status(200).send("Removed Ride Rating")
//                           },
//                           function createDeleteError(err) {
//                               res.send(500, err.message)
//                           }
//                       )
//               }
//           })
// })

// router.get("/get", function (req, res) {
//   let userID = req.user.id

//   Rating.findAll({ where: { owner: userID } })
//       .then(
//           function createFindAllSuccess(data) {
//               res.status(200).json(data)
//           },
//           function createFindAllError(err) {
//               res.send(500, err.message)
//           }
//       )
// })

// router.put("/update/:id", function (req, res) {
//   let ratingID = req.params.id
//   let nameOfRide = req.body.rating.nameOfRide;
//   let date = req.body.rating.date;
//   let waitTime = req.body.rating.waitTime;
//   let rideRating = req.body.rating.rideRating;
//   let comments = req.body.rating.comments

//   Rating.update({
//       nameOfRide: nameOfRide,
//       date: date,
//       waitTime: waitTime,
//       rideRating: rideRating,
//       comments: comments
//   }, { where: { id: ratingID } } )
//       .then(
//           function createUpdateSuccess(updatedData) {
//               res.status(200).json(updatedData)
//           },
//           function createUpdateError(err) {
//               res.send(500, err.message)
//           }
//       )
// })

// module.exports = router;