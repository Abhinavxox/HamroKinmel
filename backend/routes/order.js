const express = require("express");
const router = express.Router();
const {
  newOrder,
  getOrderById,
  getUserOrders,
  getAllOrders,
  updateOrders,
  deleteOrderById,
} = require("../controllers/orderController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").get(isAuthenticatedUser, getOrderById);
router.route("/orders/me").get(isAuthenticatedUser, getUserOrders);
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrders);
router
  .route("/admin/order/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrderById);

module.exports = router;
