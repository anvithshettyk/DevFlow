# Engineering Journal

---

## Day 3

**Date:** (Today's Date)

### What I Learned

- Revised the fundamentals of Software Architecture.
- Understood that Software Architecture is the high-level blueprint of a software application.
- Reviewed the roles of the Frontend, Backend, and Database in a web application.
- Learned how a React frontend communicates with a Node.js backend using REST APIs.
- Understood why the frontend should never communicate directly with the database.
- Learned that Mongoose acts as the bridge between the backend and MongoDB.
- Designed the initial high-level architecture for the DevFlow project.

---

### Challenges I Faced

- I initially mixed up the concepts of APIs used for third-party services and REST APIs used within our own application.
- I also confused JSON with REST APIs during the architecture flow discussion.
- I needed a better understanding of the exact journey of a request from the frontend to the database.

---

### Key Decisions

- DevFlow will follow a Client-Server Architecture.
- React will be used for the frontend.
- Node.js and Express will handle the backend and business logic.
- MongoDB Atlas will be used as the database.
- Mongoose will be used to communicate with MongoDB.
- The frontend will communicate with the backend only through REST APIs.

---

### Questions for Tomorrow

- How should the database be designed?
- How are collections related in MongoDB?
- How should authentication be implemented?
- How should the backend folder structure be organized?

---

### Reflection

Today's session helped me connect many concepts that I had learned previously but never fully related to each other. I now have a much clearer understanding of how the frontend, backend, REST APIs, Mongoose, and MongoDB work together as one complete system. Instead of memorizing definitions, I am beginning to understand the reasoning behind the architecture decisions, which gives me more confidence before starting development.