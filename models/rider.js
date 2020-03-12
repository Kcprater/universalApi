module.exports = function( sequelize, DataTypes) { /////////////////////come back for
  const Rider = sequelize.define("rider", {
      // rider: DataTypes.INTEGER,
      nameOfRide: DataTypes.STRING,
      date: DataTypes.STRING,
      waitTime: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      comments: DataTypes.STRING
  })
  return Rider;
}  ///////////////////////////////////BELOW IS FROM WORKOUTLOG


// module.exports = function(sequelize, DataTypes){
// 	return sequelize.define('definition', {
// 		description: DataTypes.STRING,
// 		logType: DataTypes.STRING,
// 		owner: DataTypes.INTEGER
// 	})
// }