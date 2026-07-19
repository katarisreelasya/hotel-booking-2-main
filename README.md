# 🏨 Smart Hotel Booking Platform

## 📖 Project Overview

**Smart Hotel Booking Platform** is a full-stack web application that simplifies hotel discovery, reservation, and management through a modern, responsive, and secure booking system. The platform enables travelers to search for hotels, make bookings, manage reservations, leave reviews, and earn loyalty rewards, while providing hotel owners and administrators with tools to manage properties, bookings, and users efficiently.

The application follows a **client-server architecture**, with an **Angular** frontend delivering a dynamic Single Page Application (SPA) experience and a **Node.js + Express.js** backend exposing RESTful APIs. **MongoDB** serves as the primary database for storing users, hotels, bookings, reviews, and loyalty information.

Designed with scalability, modularity, and maintainability in mind, the project uses reusable Angular components, modular Express routes, middleware-based request processing, and secure authentication mechanisms to provide a seamless user experience.

---

## 🚀 Key Features

### 👤 User Features

* User registration and secure authentication
* Hotel search with filtering capabilities
* Hotel details with images and amenities
* Online hotel booking and reservation management
* Booking history and cancellation
* Hotel reviews and ratings
* Loyalty rewards and points management
* User profile management

### 🏨 Hotel Management

* Hotel registration and onboarding
* Hotel listing management
* Room availability management
* Booking management
* Hotel information updates
* Image upload support

### 🔐 Admin Features

* User management
* Hotel approval and management
* Booking monitoring
* Platform administration
* Review moderation

---

# 💻 Frontend Overview

The frontend is developed using **Angular**, providing a responsive and component-based Single Page Application (SPA).

### Highlights

* Component-based architecture
* Angular Router for client-side navigation
* Responsive user interface
* Reusable Navbar and Footer components
* Dynamic content rendering using `router-outlet`
* Modular feature organization
* Responsive layout using CSS Flexbox

### Main Layout

The application follows a consistent layout consisting of:

```
Navbar
   │
Main Content (Dynamic Routes)
   │
Footer
```

The `router-outlet` dynamically loads pages such as:

* Home
* Hotels
* Search Results
* Booking
* User Profile
* Admin Dashboard

while maintaining a consistent navigation bar and footer across the application.

---

# ⚙️ Backend Overview

The backend is built using **Node.js** and **Express.js**, exposing RESTful APIs that power the frontend.

### Responsibilities

* Authentication & Authorization
* Hotel Management
* Booking Management
* User Management
* Review Management
* Loyalty Program
* Search Functionality
* File Upload Handling
* Error Handling

### API Modules

```
/api/auth
/api/hotel
/api/hotel/register
/api/booking
/api/search
/api/user
/api/review
/api/loyalty
/api/admin
```

The backend uses middleware for:

* Request logging
* Cookie parsing
* Cross-Origin Resource Sharing (CORS)
* Global error handling

---

# 🗄️ Database

The project uses **MongoDB** with **Mongoose ODM** for efficient data modeling and database interaction.

The database stores information related to:

* Users
* Hotels
* Rooms
* Bookings
* Reviews
* Loyalty Points

---

# 🏗️ Project Architecture

```
                Angular Frontend
                       │
                HTTP REST APIs
                       │
              Node.js + Express.js
                       │
                   Mongoose ODM
                       │
                   MongoDB Database
```

---

# ✨ Technologies Used

### Frontend

* Angular
* TypeScript
* HTML5
* CSS3
* Angular Router
* RxJS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cookie Parser
* CORS
* dotenv

### Development Tools

* Git & GitHub
* VS Code
* npm
* Postman

---

# 🎯 Project Goals

The primary objective of this project is to provide an end-to-end hotel booking solution that delivers:

* A smooth and intuitive booking experience for customers.
* Efficient hotel and reservation management for property owners.
* Secure authentication and role-based access control.
* A scalable, maintainable, and modular full-stack architecture.
* A responsive user interface that works seamlessly across devices.

By combining Angular's powerful frontend capabilities with Express.js and MongoDB on the backend, the platform demonstrates modern full-stack web development practices suitable for real-world hotel reservation systems.
