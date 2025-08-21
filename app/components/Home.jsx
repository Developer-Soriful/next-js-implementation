// This component should be a client component to handle hover effects.
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="font-sans text-slate-900 bg-gray-50">
      {/* 2. Hero Section - Improved UI/UX with Tailwind */}
      <header className="text-center py-24 px-8 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-b-3xl shadow-lg mb-12">
        <h2 className="text-6xl font-extrabold text-blue-600 leading-tight mb-4">
          Discover Your Next Favorite Product
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Explore our curated collection of high-quality products. Built with
          the best of modern web technology.
        </p>
        <Link
          href="/products"
          className="inline-block bg-blue-600 text-white py-4 px-10 rounded-full font-bold shadow-md transition-all duration-200 ease-in-out hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl"
        >
          Shop Now
        </Link>
      </header>

      {/* 3. Product Highlights - Styled as Cards with Tailwind */}
      <section className="py-12 px-8">
        <h3 className="text-center text-4xl font-bold mb-12 text-gray-900">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <h4 className="text-xl font-semibold mb-2">Next.js T-Shirt</h4>
            <p className="text-gray-500">A must-have for every developer.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <h4 className="text-xl font-semibold mb-2">React Mug</h4>
            <p className="text-gray-500">Start your day with a sip of React.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <h4 className="text-xl font-semibold mb-2">Tailwind CSS Hat</h4>
            <p className="text-gray-500">Stay stylish and focused.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
