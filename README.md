# 🏛️Nalanda Library Management System

The **Library Management System** is a backend project designed to manage a 
library's books and users. Built using **Node.js**, **Express**, **MongoDB**, 
this system allows for efficient management of users, books, borrowing, and returning operations,
as well as reporting features.

## 💻 Tech Stack
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **API:** RESTful API
- **Authentication:** JWT (JSON Web Tokens)
- **Version Control:** Git (Github)
- **Deployment:** Render,link https://library-management-system-0lw6.onrender.com/
  
## 📚 Nalanda Library Management System API Documentation
- This document provides details on how to use the RESTful API endpoints for the Nalanda Library Management System.
- Created by using Postman
- Url: https://documenter.getpostman.com/view/29892242/2sAXjF7uSg
---

## 🌟 Features
- **User Management:** Registration, login, and role-based access control (Admin and Member roles).
- **Book Management:** Add, update, delete, and list books with pagination and filtering options.
- **Borrowing System:** Borrow and return books, with borrowing history for users.
- **Reporting:** Generate reports such as most borrowed books, active members, and book availability.
- **API Support:** Both RESTful.
- **Validation:** Data validation and error handling.

---

## ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd library-management-system
   
2. **Install dependencies:**
     npm install
3. **Environment Setup:**
     - Create a .env file in the root directory and configure the following variables:
     - MONGO_URI=Your MongoDB connection string
     - JWT_SECRET=Your JWT secret 

## 🚀 Usage
- The server will be running at http://localhost:3000.
- Use tools like Postman to interact with the RESTful API.

## API Endpoints  
## User Management
- POST /api/users/register: Register a new user
- POST /api/users/login: Login a user
## Book Management
- POST /api/books/add: Add a new book (Admin only)
- PUT /api/books/update/:id: Update book details (Admin only)
- DELETE /api/books/delete/:id: Delete a book (Admin only)
- GET /api/books/list: List all books with pagination and filtering
## Borrowing System
- POST /api/borrows/borrow/:bookId: Borrow a book (Member only)
- POST /api/borrows/return/:bookId: Return a borrowed book (Member only)
- GET /api/borrows/borrow/history: View borrowing history (Member only)
## Reports and Aggregations
- GET /api/reports/most-borrowed: Get the most borrowed books
- GET /api/reports/active-members: Get the most active members
- GET /api/reports/book-availability: Get book availability summary
## Authentication and Authorization
- JWT Authentication: Users must log in to receive a token.
- Role-based Access Control: Admins can manage books, while Members can borrow/return books and view history.
- Attach the token to the Authorization header as Bearer <token>.
## ☁️ Deployment
- Deployed the application in Render.
