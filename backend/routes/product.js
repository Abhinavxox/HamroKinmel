const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  createProductReview,
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

router.route("/review").post(isAuthenticatedUser, createProductReview);
module.exports = router;
