import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  // this is an attempt to change the values of the product to integrate it in the spamashopNew mongodbase
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    stock: Number,
    brand: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
