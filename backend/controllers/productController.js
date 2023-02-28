const Product = require("../models/Product");

//create new product
exports.newProduct = async (req, res, next) => {
  //have to upload all the images to cloudenary and fetch back urls
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

exports.getProducts = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "This route will show all products in database.",
  });
};
