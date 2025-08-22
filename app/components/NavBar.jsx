"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

const NavBar = () => {
  // useSession hook is only available in client components
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="font-sans bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Job Task
          </Link>

          {/* Desktop links - hidden on small screens */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
              Products
            </Link>
            {session ? (
              <>
                <Link href="/dashboard/add-product" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
                  Add Product
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 text-white font-bold py-2 px-5 rounded-full text-sm transition-all duration-200 hover:bg-red-600 focus:outline-none"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="bg-blue-600 text-white font-bold py-2 px-5 rounded-full text-sm transition-all duration-200 hover:bg-blue-700 focus:outline-none">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button - visible on small screens */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/products" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
            Products
          </Link>
          {session ? (
            <>
              <Link href="/dashboard/add-product" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                Add Product
              </Link>
              <button
                onClick={() => { signOut(); closeMenu(); }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-500 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-blue-500 hover:bg-gray-100">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
