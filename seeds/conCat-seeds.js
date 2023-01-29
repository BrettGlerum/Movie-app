const {conCat} = require('../models');

const categoryData = [
  {
    category_name: 'Non-Alcoholic Beverages',
  },
  {
    category_name: 'Alcoholic Beverages',
  },
  {
    category_name: 'Food',
  },
  {
    category_name: 'Snacks',
  },
];

const seedConcessions = () => conCat.bulkCreate(categoryData);

module.exports = seedConcessions;
