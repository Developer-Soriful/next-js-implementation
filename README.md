Next.js E-commerce Application
This is a modern e-commerce platform built with Next.js 15 (App Router). The application is designed to showcase and manage products, featuring a clean, responsive UI and a robust backend powered by Next.js API Routes and MongoDB. This project was bootstrapped with create-next-app.

🌟 Features
Public Pages: A comprehensive set of public-facing pages, including a homepage, a product list, and dynamic product detail pages.

Secure Authentication: User authentication is handled securely using NextAuth.js.

Protected Routes: Certain routes, like the "Add Product" dashboard, are protected and accessible only to authenticated users.

API Routes: Utilizes Next.js API Routes for efficient backend operations.

Database: Integrates with MongoDB for flexible and scalable data storage.

🚀 Getting Started
To get a copy of this project up and running on your local machine, follow these steps.

Prerequisites
Make sure you have Node.js and npm installed on your system.

Installation
Clone the repository:

git clone [your-repository-url]
cd [your-project-folder]

Install dependencies:

npm install
# or
yarn install
# or
pnpm install
# or
bun install

Environment Variables:

Create a .env.local file in the root directory and add your MongoDB connection string.

MONGODB_URI=your_mongodb_connection_string

Running the Development Server
First, run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 with your browser to see the result. The page auto-updates as you edit the files.

🗺️ Route Summary
Route

Description

Access

/

The main landing page with a hero section.

Public

/login

User authentication page.

Public

/products

Displays a list of all products fetched from the database.

Public

/products/[id]

Shows detailed information for a single product.

Public

/dashboard/add-product

Form to add new products to the database.

Protected (Authentication Required)

📚 Learn More
To learn more about Next.js and its features, check out the official documentation:

Next.js Documentation

Learn Next.js - an interactive tutorial.

You can also check out the Next.js GitHub repository for more details.

🚀 Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform, from the creators of Next.js.

For more details, refer to the Next.js deployment documentation.
