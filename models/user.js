// module.exports = function (sequelize, DataTypes) {
//   return sequelize.define("user", {
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         isEmail: true,
//         notEmpty: true},
//       unique: {
//         args: true,
//         msg: "Email address already in use!"
//         }
//       },
//     passwordhash: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//         len: [5,255],
//         msg: "Password must be at least 5 characters!"
//       }
//     }
//   });
// };

// module.exports = function (sequelize, DataTypes) {

//   return sequelize.define("user", {
//     email: DataTypes.STRING,
//     passwordhash: DataTypes.STRING,
//   });
// };

module.exports = function (sequelize, DataTypes) {

  return sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordhash: {
      type: DataTypes.STRING,
      validate: {
      len: [5, 255],}, //not working
      allowNull: false,
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