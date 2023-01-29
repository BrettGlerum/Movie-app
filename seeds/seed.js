const sequelize = require("../config/connection");
const seedconCat = require("./conCat-seeds");
const seedConcessions = require("./concessions-seeds");
const seedMovies = require("./movies-seeds");
const seedGenres = require("./genres-seeds");
const seedReviews = require("./review-seeds");
const seedUsers = require("./users-seeds");
const seedTimes = require("./showing-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedGenres();
  await seedMovies();
  await seedReviews();
  await seedconCat();
  await seedConcessions();
  await seedTimes();

  process.exit(0);
};
seedAll();