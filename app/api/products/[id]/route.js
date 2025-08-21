// app/api/products/[id]/route.js
import connectMongoDB from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

// This is a server-side API route. Do NOT add "use client" here.

/**
 * Handles GET requests to fetch a single product by its unique ID.
 * @param {Request} request The incoming request object.
 * @param {{ params: { id: string } }} context The context object containing route parameters.
 * @returns {Response} A JSON response containing the product data or an error message.
 */
export async function GET(request, { params }) {
  try {
    // Log a message to the server console to confirm this route is being accessed.
    console.log(`[API] Fetching product with ID: ${params.id}`);

    // Connect to the MongoDB database using Mongoose.
    await connectMongoDB();

    const { id } = params;

    // Use the Mongoose model to find the product by its ID.
    // The findById() method automatically handles the conversion of the ID string.
    const product = await Product.findById(id);

    // If no product is found, return a 404 Not Found response.
    if (!product) {
      console.log(`[API] Product with ID ${id} not found.`);
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // If the product is found, return it as a JSON response.
    console.log(`[API] Product with ID ${id} found successfully.`);
    return NextResponse.json({ product });
  } catch (error) {
    // Log the error for debugging purposes.
    console.error("[API] An unexpected error occurred:", error);
    // Return a generic 500 Internal Server Error response.
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
