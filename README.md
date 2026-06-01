# Scalable REST API with Authentication & Role-Based Access

## Overview

This project is a full-stack application developed as part of the Backend Developer Internship Assignment.

The application provides:

* User Registration & Login
* JWT Authentication
* Role-Based Access Control (User/Admin)
* CRUD Operations for Tasks
* Input Validation & Error Handling
* API Versioning
* Swagger API Documentation
* React Frontend Integration

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* bcrypt.js
* Mongoose

### Frontend

* React.js
* Axios
* React Router

---

## Features

### Authentication

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Token Generation

### Authorization

* User Role
* Admin Role
* Protected Routes

### Task Management

* Create Task
* View Tasks
* Update Task
* Delete Task

### Security

* Password Hashing
* JWT Authentication
* Input Validation
* Error Handling Middleware

---

## API Versioning

All APIs are versioned using:

```bash
/api/v1
```

Examples:

```bash
POST /api/v1/auth/register
POST /api/v1/auth/login
GET /api/v1/tasks
```

---

## Database Schema

### User

```javascript
{
  name: String,
  email: String,
  password: String,
  role: String
}
```

### Task

```javascript
{
  title: String,
  description: String,
  completed: Boolean,
  createdBy: ObjectId
}
```

---

## Installation

### Clone Repository

```bash
git clone [https://github.com/yourusername/project-name.git](https://github.com/SarveshCodes398/Task_0.git)
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the backend folder:

```env

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## API Documentation


### Postman Collection

Paste your Postman Public Collection Link here:

(https://www.postman.com/mathursarvesh722-2219512/task-0/collection/55393142-44ae451d-1dbf-43c5-b5d8-a9de43b1ee47?action=share&source=copy-link&creator=55393142)


## Authentication

Protected routes require a JWT token.

Example:

```http
Authorization: tA0HC8sLpKF6O1ql9t4JR0njCmasdllw9zRDbW1Msqw

```

---

## Project Structure

```bash
backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── utils/
└── server.js

frontend/
│
├── src/
├── components/
├── pages/
├── services/
└── App.js
```






## Author

Sarvesh Mathur

GitHub:
https://github.com/sarveshcodes398

LinkedIn:
https://linkedin.com/in/sarveshcodes398
