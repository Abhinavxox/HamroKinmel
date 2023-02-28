const Product = require("../models/Product");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const products = require("../data/product.json");

//setting up config file
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("All products are added");

    process.exit();
  } catch (error) {
    console.log(error.mesage);
    process.exit();
  }
};

seedProducts();
