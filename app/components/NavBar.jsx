"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const NavBar = () => {
  // useSession hook is only available in client components
  const { data: session } = useSession();

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#ffffff", // Changed to a clean white
      borderBottom: "1px solid #e0e0e0", // Lighter border
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)", // Soft shadow
      fontFamily: "var(--font-geist-sans), sans-serif" // Using the Geist font you provided
    }}>
      <Link href="/" style={{ textDecoration: "none", color: "#1a1a1a", fontSize: "1.5rem", fontWeight: "bold" }}>
        Job Task
      </Link>
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <Link 
          href="/products" 
          style={{ 
            textDecoration: "none", 
            color: "#555555", 
            transition: "color 0.2s",
            fontWeight: 500
          }}
        >
          Products
        </Link>
        {session ? (
          <>
            <Link 
              href="/dashboard/add-product" 
              style={{ 
                textDecoration: "none", 
                color: "#555555", 
                transition: "color 0.2s",
                fontWeight: 500
              }}
            >
              Add Product
            </Link>
            <button
              onClick={() => signOut()}
              style={{
                backgroundColor: "#ef4444",
                color: "white",
                border: "none",
                padding: "0.6rem 1.25rem",
                borderRadius: "9999px", // Fully rounded button
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "0.875rem",
                transition: "background-color 0.2s ease-in-out",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link 
            href="/login" 
            style={{ 
              textDecoration: "none", 
              backgroundColor: "#2563eb", // A deep blue
              color: "white", 
              padding: "0.6rem 1.25rem", 
              borderRadius: "9999px",
              fontWeight: "bold",
              fontSize: "0.875rem",
              transition: "background-color 0.2s ease-in-out",
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
