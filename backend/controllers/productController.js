const productModel = require("../models/productModel");
const { createCustomError } = require("../middleware/Errors");
const { async } = require("regenerator-runtime");
exports.getAllProducts = async (req, res, next) => {
    const products = await productModel.find();
    res.status(200).json({products : products})
}
exports.createProduct = async (req, res, next) => {
    const { name, price, stock, category } = req.body;

    if (!name || !price) { // ||!stock ||!category
        return next(createCustomError("All feilds are require", 404));
    }
    const newProduct = await productModel.create(req.body);

    if (!newProduct) return next(createCustomError("All feilds are require", 404));
    res.status(201).json({ Product: newProduct })
}
exports.updateProduct = async (req, res, next) => {
    const {id} = req.parms;
    if (!id) return next(createCustomError("Request is invalid!", 404));

    const { name, price, stock, category } = req.body;
    if (!name || !price) { // ||!stock ||!category
        return next(createCustomError("All feilds are require", 404));
    }
    const updateProduct = await productModel.findOneAndUpdate({_id:id},req.body);

    if (!updateProduct) return next(createCustomError("All feilds are require", 404));
    res.status(201).json({ product: updateProduct })
}
exports.deleteProduct = async (req, res, next) => {
    const {id} = req.parms;
    if (!id) return next(createCustomError("Request is invalid!", 404));

    const { name, price, stock, category } = req.body;
    if (!name || !price) { // ||!stock ||!category
        return next(createCustomError("All feilds are require", 404));
    }
    const deleteProduct = await productModel.findOneAndUpdate({_id:id});

    if (!updateProduct) return next(createCustomError("All feilds are require", 404));
    res.status(201).json({ product: "Product Deleted succesfully" })
}
exports.getProductDetails = async (req, res, next) => {
    const {id} = req.params;
    // if (!id) return next(createCustomError("Request is invalid!", 404));

    const product = await productModel.findById({_id:id});

    if (!product) return next(createCustomError("All feilds are require", 404));
    res.status(201).json({ product: product })
}
exports.createProductReview = (req, res, next) => {

}
exports.getProductReviews = (req, res, next) => {

}
exports.deleteReview = (req, res, next) => {

}
exports.getAdminProducts = async (req, res, next) => {
    const products = await productModel.find();
    res.status(200).json({ products : products})
}