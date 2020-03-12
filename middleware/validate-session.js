const jwt = require('jsonwebtoken');
const sequelize = require('../db');
const User = sequelize.import('../models/user');

module.exports = function(req, res, next){
	let sessionToken = req.headers.authorization

	if(!req.body.user && sessionToken){
		jwt.verify(sessionToken, process.env.JWT_SECRET, function(err, decoded){
			if(decoded){
				User.findOne({where: {id:decoded.id}}).then(
					function(user){
						req.user = user; 
						next()
					},
					function(){
						res.status(401).send({error: "Not authorized"})
					}
				);
			} else {
				res.status(401).send({error: "Not authorized"})
			}
		})
	} else {
		next();
	}
}
//above from workout log





// //first attempt

// const jwt = require('jsonwebtoken');
// const User = require('../db').import('../models/user');

// const validateSession = (req, res, next) => {
//   if (req.method == 'OPTIONS') {
//     next();
//   }else{
//     let sessionToken = req.headers.authorization
//     console.log(sessionToken)
//     if (!sessionToken || sessionToken === undefined) return res.status(403).send({ auth: false, message: 'No token provided.'});
//     else {
//       jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => {
//         if(decoded){
//           User.findOne({where: {id: decoded.id}}).then(user => {
//             req.user = user;
//             next();
//           }, function() {
//             res.status(401).send({error: 'Not Authorized'});
//           });
//         }else{
//           res.status(400).send({error: 'Not Authorized'});
//         }
//       });
//     }
//   }
// }
// module.exports = validateSession; //is this correct?