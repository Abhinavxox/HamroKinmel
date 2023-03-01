const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController");

router.route("/products").get(getProducts);
router.route("/product/:id").get(getProductById);
router.route("/admin/product/new").post(newProduct);
router
  .route("/admin/product/:id")
  .put(updateProductById)
  .delete(deleteProductById);

module.exports = router;
