const express = require("express");
const { getAllProducts, createProduct, deleteProduct, updateProduct, getProductDetails, getAdminProducts } = require("../controllers/productController");
const router = express.Router();

// =========== user ==============
router.route("/products").get(getAllProducts)
router.route("/product/:id").get(getProductDetails)
// =========== Admin ==============
router.route("/admin/products").get(getAdminProducts)
router.route("/admin/product/new").post(createProduct)
router.route("/admin/product/:id").patch(updateProduct).delete(deleteProduct);

// router.route("/admin/product/:id")


module.exports = router;


// const {
//     getAllProducts,
//     createProduct,
//     updateProduct,
//     deleteProduct,
//     getProductDetails,
//     createProductReview,
//     getProductReviews,
//     deleteReview,
//     getAdminProducts,
// } = require("../controllers/productController");
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// router.route("/products").get(getAllProducts);

// router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

// router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

// router.route("/admin/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

// router.route("/product/:id").get(getProductDetails);

// router.route("/review").put(isAuthenticatedUser, createProductReview);

// router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser, deleteReview);
