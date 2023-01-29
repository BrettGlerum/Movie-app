const {Genres} = require('../models');

const genreData = [
  {
    name: 'Action',
  },
  {
    name: 'Comedy',
  },
  {
    name: 'Horror',
  },
  {
    name: 'Mystery',
  },
];

const seedGenres = () =>
  Genres.bulkCreate(genreData, {individualHooks: true, returning: true});

module.exports = seedGenres;