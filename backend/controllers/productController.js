const Product = require("../models/Product");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//create new product (/api/v1/admin/product/new)
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  //have to upload all the images to cloudenary and fetch back urls
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//get all products (api/v1/products)
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
});

//get product by id (api/v1/product/:id)
exports.getProductById = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

//update product by id (api/v1/admin/product/:id)
exports.updateProductById = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  //if product not found
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
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
});

//delete product by id (api/v1/admin/product/:id)
exports.deleteProductById = catchAsyncErrors(async (req, res, next) => {
  const result = await Product.deleteOne({ _id: req.params.id });

  if (result.deletedCount === 0) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Product deleted",
  });
});
