const {Users} = require('../models');

const userData = [
  {
    name: 'Bames Jond',
    email: 'PublicAgent700@spynet.net',
    password: 'password123',
  },
  {
    name: 'Mozart',
    email: 'IMaDog@bones.com',
    password: 'password123',
  },
  {
    name: 'Gurrladriel',
    email: 'ElfQueen@3Rings.org',
    password: 'password123',
  },
  {
    name: 'Dana Carvey',
    email: 'PartyOnWayne@wwpte.com',
    password: 'password123',
  },
];

const seedUsers = () =>
  Users.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;