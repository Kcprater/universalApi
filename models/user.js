module.exports = function (sequelize, DataTypes) {

  return sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordhash: {
      type: DataTypes.STRING
    },
  },
  )
}

///simple below

// module.exports = function(seq, DataTypes){

// 	let User = seq.define('user', {
// 		email: DataTypes.STRING,
// 		passwordhash: DataTypes.STRING,
// 	})

// 	return User;
// }