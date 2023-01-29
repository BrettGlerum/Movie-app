const {Showings} = require('../models');

const showData = [
  {
    times: '12:30:00',
    tickets_available: 23,
    ticket_cost: 9.50,
    movie_id: 3,
  },
  {
    times: '2:30:00',
    tickets_available: 23,
    ticket_cost: 9.50,
    movie_id: 3,
  },
  {
    times: '4:30:00',
    tickets_available: 23,
    ticket_cost: 11.50,
    movie_id: 3,
  },
  {
    times: '7:30:00',
    tickets_available: 23,
    ticket_cost: 11.50,
    movie_id: 3,
  },
];
const seedTimes = () => Showings.bulkCreate(showData);

module.exports = seedTimes;