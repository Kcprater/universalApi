let router = require('express').Router();
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let RiderRating = sequelize.import('../models/rider');

router.post ('/', function(req,res){ //COME BACK TO THIS?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?

  let rider = req.user.id;
  let nameOfRide = req.body.riderrating.nameOfRide;
  let date = req.body.riderrating.date;
  let waitTime = req.body.riderrating.waitTime;
  let rideRating = req.body.riderrating.rideRating;
  let comments = req.body.riderrating.comments;

  RiderRating.create({
    rider: rider,
    nameOfRide: nameOfRide,
    date: date,
    waitTime: waitTime,
    rideRating: rideRating,
    comments: comments,

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
  RiderRating.findAll({ where: { rider: userid}})
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

// //commented out below but above second attempt after checking workout log

// router.put('/:id', validateSession, (req, res) => {
//   Rating.update(req.body.rating, { where: { id: req.params.id }})
//     .then(rating => res.status(200).json(rating))
//     .catch(err => res.json(req.errors))
// })

// router.delete('/:id', validateSession, (req,res) => {
//   Rating.destroy({
//     where: { id: req.params.id
//     }
//   })
//   .then(rating => res.status(200).json(rating))
//     .catch(err => res.json({error: err}))
// });


// module.exports = router;

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