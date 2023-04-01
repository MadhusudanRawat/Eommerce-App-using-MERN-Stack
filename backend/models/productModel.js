const mongoose = require("mongoose")
const productModel = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"Please enter product Name."],
        trim :true
    },
    description :{
        type : String,
        require : [true,"Please write product description."]
    },
    price :{
        type : Number,
        required :[true, "Please Enter the Product Price."],
        maxLength: [8, "Price cannot exceed 8 characters."],
    },
    images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
      category: {
        type: String,
        required: [true, "Please Select Product Category."],
      },
      Stock: {
        type: Number,
        required: [true, "Please Enter product Stocks."],
        maxLength: [4, "Stock cannot exceed 4 characters."],
        default: 1,
      },
});

module.exports = mongoose.model("Product",productModel)