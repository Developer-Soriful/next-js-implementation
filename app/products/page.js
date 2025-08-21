"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
        <p className="text-xl text-red-500 mb-4">{error}</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="font-sans text-slate-900 bg-gray-50 min-h-screen py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length === 0 ? (
            <p className="text-center text-lg text-gray-500 col-span-full">No products found. Please add some from the dashboard.</p>
          ) : (
            products.map((product) => (
              <div
                key={product._id} // Use _id from MongoDB
                className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <h2 className="text-2xl font-semibold mb-2">{product.productName}</h2>
                <p className="text-gray-500">{product.description}</p>
                <p className="text-xl font-bold mt-4 mb-4">${product.price}</p>
                <Link
                  href={`/products/${product._id}`}
                  className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full font-bold shadow-md transition-all duration-200 hover:bg-blue-700"
                >
                  Details
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
