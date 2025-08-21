"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { GeistSans } from "next/font/google";

// The Geist font is now applied globally in RootLayout.js,
// so we don't need to import it here.

export default function ProductDetailsPage() {
  // Use the useParams hook to get the ID from the URL.
  // This is the correct method for client components in Next.js App Router.
  const params = useParams();
  const id = params.id;
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only run the fetch operation if a valid ID exists
    if (id) {
      const fetchProduct = async () => {
        setLoading(true);
        setError(null);
        try {
          const res = await fetch(`/api/products/${id}`);
          
          if (!res.ok) {
            // Check for a specific 404 status code from the API
            if (res.status === 404) {
              throw new Error("Product not found.");
            }
            throw new Error(`Failed to fetch product details. Status: ${res.status}`);
          }
          
          const data = await res.json();
          setProduct(data.product);
        } catch (err) {
          console.error("Error fetching product:", err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      
      fetchProduct();
    }
  }, [id]);

  // Display a loading state while fetching data
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <svg className="animate-spin h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-4 text-lg text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  // Display an error message if the product is not found or an error occurred
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center bg-gray-50">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">Error!</h1>
        <p className="text-xl text-gray-600 mb-6">{error}</p>
        <Link href="/products" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full font-semibold transition-all duration-200 hover:bg-blue-700 hover:shadow-lg">
          &larr; Back to all products
        </Link>
      </div>
    );
  }

  // Display the product details once loaded
  return (
    <div className="flex flex-col items-center py-12 px-8 bg-gray-50 min-h-screen  font-sans">
      <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <Link 
          href="/products" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6 font-medium"
        >
          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Products
        </Link>
        <h1 className="text-5xl font-extrabold text-gray-900 mt-4">{product.productName}</h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">{product.description}</p>
        <p className="mt-8 text-4xl font-bold text-blue-600">
          <span className="text-gray-900">${product.price}</span>
        </p>
        <p className="text-sm text-gray-400 mt-4">
          Product ID: {product._id}
        </p>
      </div>
    </div>
  );
}
