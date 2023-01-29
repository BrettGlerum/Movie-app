const sequelize = require('../config/connection');
const {Users, Movies, Genres, Showings, Reviews, Concessions, conCat} = require('../models');

const conCatData = require('./conCat-seeds');
const concessionData = require('./concessions-seeds');

const seedDatabase = async () => {
  await sequelize.sync({force: true});

  const concessions = await Concessions.bulkCreate(concessionData, {
    individualHooks: true,
    returning: true,
  });

  const conCats = await conCat.bulkCreate(conCatData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
