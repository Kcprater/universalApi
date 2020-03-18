module.exports = function(sequelize, DataTypes){
	return sequelize.define('rating',{
    nameOfRide: DataTypes.STRING,
    date: DataTypes.STRING,
    waitTime: DataTypes.INTEGER,
    rideRating: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    owner: DataTypes.INTEGER
	})
}

