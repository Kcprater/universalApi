const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => console.log("The Database Is Connected!"))
  .catch(err => console.log(err));

User = sequelize.import('./models/user');
Rider = sequelize.import('./models/rider');
Ratings = sequelize.import('./models/rating')

module.exports = sequelize;


//database association