import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    // You can add more fields as needed.
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// If the Product model already exists, use it. Otherwise, create a new one.
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
