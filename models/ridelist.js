module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('ridelist', {
    nameOfRide: DataTypes.STRING,
    location: DataTypes.STRING,
    park: DataTypes.STRING,
    type: DataTypes.STRING,
    minimumHeight: DataTypes.INTEGER,
      }
  )
  return List;
}

// need to make this available to all users
//Import spreadsheet I created