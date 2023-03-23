const Order = require("../models/Order.js");
const Product = require("../models/Product");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//create new order (/api/v1/order/new)
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
  } = req.body;

  const order = await Order.create({
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(200).json({
    success: true,
    order,
  });
});

//get order by id (/api/v1/order/:id)
exports.getOrderById = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new ErrorHandler("No order found with this id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

//get logged in user's orders (/api/v1/orders/me)
exports.getUserOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find({ user: req.user.id });

  res.status(200).json({
    success: true,
    orders,
  });
});

//Admin routes

//get all orders (/api/v1/admin/orders)
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount = order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

//Update / Process order  (/api/v1/admin/order/:id)
exports.updateOrders = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  order.orderItems.forEach(async (item) => {
    await updateStock(item.product, item.quantity);
  });

  order.orderStatus = req.body.orderStatus;
  order.deliveredAt = Date.now();

  await order.save();

  res.status(200).json({
    success: true,
    order,
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.stock -= quantity;

  await product.save({ validateBeforeSave: false });
}

//delete order by id (/api/v1/admin/order/:id)
exports.deleteOrderById = catchAsyncErrors(async (req, res, next) => {
  const result = await Order.deleteOne({ _id: req.params.id });

  if (result.deletedCount === 0) {
    return next(new ErrorHandler("No Order found with this id", 404));
  }

  res.status(200).json({
    success: true,
    message: "Order deleted",
  });
});
