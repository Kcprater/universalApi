module.exports = function( sequelize, DataTypes) {
  const Rider = sequelize.define("rider", {
      nameOfRide: DataTypes.STRING,
      date: DataTypes.STRING,
      waitTime: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      comments: DataTypes.STRING
  })
  return Rider;
}  