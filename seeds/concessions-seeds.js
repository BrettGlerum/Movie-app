const {Concessions} = require('../models');

const productData = [
  {
    product_name: 'Water',
    price: 3.00,
    stock: 30,
    category_id: 1,
  },
  {
    product_name: 'Sparkling Water',
    price: 3.50,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'Fountain Soda',
    price: 5.50,
    stock: 100,
    category_id: 1,
  },
  {
    product_name: 'Premium Beer',
    price: 9.00,
    stock: 40,
    category_id: 2,
  },
  {
    product_name: 'Domestic Beer',
    price: 7.50,
    stock: 60,
    category_id: 2,
  },
  {
    product_name: 'Red Wine by the Glass',
    price: 10.50,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: 'White Wine by the Glass',
    price: 10.50,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: 'Mini Corndogs',
    price: 8.75,
    stock: 14,
    category_id: 3,
  },
  {
    product_name: 'Personal Pan Pizza',
    price: 12.75,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: 'Chicken Fingers with French Fries',
    price: 12.75,
    stock: 25,
    category_id: 3,
  },
  {
    product_name: 'Just the Fries',
    price: 4.50,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Red Vines',
    price: 6.50,
    stock: 35,
    category_id: 4,
  },
  {
    product_name: 'Sour Patch Kids',
    price: 6.50,
    stock: 35,
    category_id: 4,
  },
  {
    product_name: 'Raisinettes',
    price: 5.50,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Chocolate Covered Cookie Dough',
    price: 6.50,
    stock: 20,
    category_id: 4,
  },
];
const seedProducts = () => Concessions.bulkCreate(productData);

module.exports = seedProducts;