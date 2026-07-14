# DevFlow System Architecture

## Purpose

This document describes the high-level architecture of DevFlow. It explains how different components of the application communicate with each other to provide a secure, scalable, and maintainable project management platform.

---

## Architecture Style

DevFlow follows a **Client-Server Architecture**.

The application consists of three main layers:

- Frontend (React)
- Backend (Node.js + Express)
- Database (MongoDB)

The frontend communicates with the backend using REST APIs, while the backend interacts with MongoDB using Mongoose.

                     User
                       │
                       ▼
            React Frontend
      (HTML + CSS + JavaScript)
                       │
        HTTP/HTTPS + REST API
                       │
                       ▼
          Node.js + Express Server
                       │
         Authentication & Validation
                       │
                   Mongoose
                       │
                       ▼
                 MongoDB Atlas