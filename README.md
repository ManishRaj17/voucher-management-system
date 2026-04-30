A React.js-based Voucher Management System with role-based authentication, dynamic voucher creation, filtering, and CRUD operations using Context API.

This project is a simple Voucher Management System built using React.js.
The idea was to replicate a basic accounting workflow where users can create and manage vouchers with different access levels.

What This Project Does
The application allows users to:

Log in as Admin or Staff
Create vouchers with basic details
View all vouchers in a structured table
Filter vouchers based on date, type, or narration
Edit and delete vouchers (Admin only)
The goal was to keep the system simple but realistic enough to demonstrate how such tools work in actual business environments.

User Roles
There are two types of users in the system:

Admin
Can create, view, edit, and delete vouchers
Staff
Can only create and view vouchers
Edit and delete options are restricted
Voucher Features
Voucher Type (Payment / Received)
Default narration ("On Account")
Basic debit and credit values
Data displayed in a clean table format
Filters for:
Date range
Voucher type
Narration search
Tech Stack
React.js
Context API (for global state)
React Router (for navigation)
Vite (for development and build)
React Toastify (for notifications)
How It Works
Authentication state is handled using Context API
Voucher data is also stored in a global context
When a voucher is created, it is added to state and immediately reflected in the list
Filters work in real-time using array methods like .filter()
UI changes based on user role (admin vs staff)
