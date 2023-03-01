const Product = require("../models/Product");

//create new product (/api/v1/admin/product/new)
exports.newProduct = async (req, res, next) => {
  //have to upload all the images to cloudenary and fetch back urls
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

//get all products (api/v1/products)
exports.getProducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
};

//get product by id (api/v1/product/:id)
exports.getProductById = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
  res.status(200).json({
    success: true,
    product,
  });
};

//update product by id (api/v1/admin/product/:id)
exports.updateProductById = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  //if product not found
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

//delete product by id (api/v1/admin/product/:id)
exports.deleteProductById = async (req, res, next) => {
  const result = await Product.deleteOne({ _id: req.params.id });

  if (result.deletedCount === 0) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Product deleted",
  });
};
