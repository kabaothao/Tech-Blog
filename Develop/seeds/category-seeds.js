const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Shirts",
  },
  {
    category_name: "Shorts",
  },
  {
    category_name: "Music",
  },
  {
    category_name: "Hats",
  },
  {
    category_name: "Shoes",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

//09/22/21 in class Chris show us how to load your file faster
//node seeds.seed.hjs file
//if you want to add a scrip
//set this in your package.json script: {"seed": "node seeds/seed"}
//npm run seed
