Blogging App

A full-stack blogging platform where admins manage blogs and users view content. Built with React.js, Node.js, Express, and MongoDB.

1. Features

Admin:

Login and manage blogs (add, edit, delete).

Approve or block users.

View dashboard statistics (total blogs & approved users).

User:

Sign up and login.

View all approved blogs.

Read full blog details.

Edit personal profile.

2. Tech Stack

Frontend: React.js, HTML, CSS, Bootstrap, JavaScript

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Others: Axios, Multer, React Router, LocalStorage

3. Installation

Clone the repository:

git clone https://github.com/yourusername/blogging-app.git


Backend:

cd backend
npm install
npm start


Frontend:

cd frontend
npm install
npm start


Access in browser:
Frontend → http://localhost:3000
Backend → http://localhost:3002

4. How it Works

Users sign up → pending admin approval.

Admin logs in → manages blogs and users.

Blogs linked to admin _id in database.

Users can view approved blogs and read full content.

Frontend communicates with backend via Axios.

File uploads handled using FormData + Multer.

5. Notes

Admin credentials are predefined.

Both client-side and server-side validation implemented.

Login state persisted using LocalStorage.