import connectMongoDB from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";
//  get id
// GET handler to fetch all products from the MongoDB database
export async function GET() {
  try {
    // Connect to the database
    await connectMongoDB();
    // Find all products
    const products = await Product.find();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred while fetching products" }, { status: 500 });
  }
}

// POST handler to add a new product to the MongoDB database
export async function POST(request) {
  try {
    // Get data from the request body
    const { productName, description, price } = await request.json();
    // Connect to the database
    await connectMongoDB();
    // Create a new product document in the database
    await Product.create({ productName, description, price });
    return NextResponse.json({ message: "Product created" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred while creating the product" }, { status: 500 });
  }
}
