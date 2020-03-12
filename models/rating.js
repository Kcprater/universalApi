// module.exports = (sequelize, DataTypes) => {
//   const Rating = sequelize.define('rating', {
//     rider: DataTypes.INTEGER,//this will use the user id#
//     nameOfRide: DataTypes.STRING,
//     date: DataTypes.DATE, //possibly auto-populate day of week???
//     waitTime: DataTypes.INTEGER,
//     rideRating: {
//       type: DataTypes.INTEGER,
//       validate: {
//         min: 0,
//         max: 5
//       }
//       }, //would like to use a star rating
//     comments: DataTypes.STRING,
//       })
    
//   return Rating;
//   }

module.exports = function(sequelize, DataTypes){
	return sequelize.define('rating',{
    rider: DataTypes.INTEGER,
    nameOfRide: DataTypes.STRING,
    date: DataTypes.STRING,     //CHANGE TO DATE FORMAT
    waitTime: DataTypes.INTEGER,
    rideRating: DataTypes.INTEGER,
    comments: DataTypes.STRING,
	})
}

