const {conCat} = require('../models');

const categoryData = [
  {
    name: 'Non-Alcoholic Beverages',
  },
  {
    name: 'Alcoholic Beverages',
  },
  {
    name: 'Food',
  },
  {
    name: 'Snacks',
  },
];

const seedConCat = () => conCat.bulkCreate(categoryData);

module.exports = seedConCat;