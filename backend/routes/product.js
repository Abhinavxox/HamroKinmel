const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  createProductReview,
  getAllReviews,
  deleteReviews,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/products").get(getProducts);
router.route("/product/:id").get(getProductById);
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProductById)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProductById);

router.route("/review").put(isAuthenticatedUser, createProductReview);
router
  .route("/reviews")
  .get(isAuthenticatedUser, getAllReviews)
  .delete(isAuthenticatedUser, deleteReviews);
module.exports = router;
