Blogging App
A full-stack blogging platform where admins manage blogs and users view content. Built with React.js, Node.js, Express, and MongoDB.

Features
Admin
•	Login and manage blogs (add, edit, delete).
•	Approve and delete users.
•	View dashboard statistics (total blogs & approved users).
User
•	Sign up and login.
•	View all approved blogs.
•	Read full blog details.
•	Edit personal profile.

Tech Stack
•	Frontend: React.js, HTML, CSS, Bootstrap, JavaScript
              Libraries/Tools: Axios (for API calls), React Router (for routing), LocalStorage (for state persistence)
•	Backend: Node.js, Express.js
             Libraries/Tools: Multer (for file uploads), Mongoose (MongoDB object modeling)
•	Database: MongoDB (Mongoose)

Installation
1.	Clone the repository:
    git clone <repo-url>

2.	Backend:
    cd backend
    npm install
    npm start

3.	Frontend:
    cd frontend
    npm install
    npm start

4.	Access in browser:
    Frontend → http://localhost:3000
    Backend → http://localhost:3002

How it Works
1.	Users sign up → pending admin approval.
2.	Admin logs in → manages blogs and users.
3.	Blogs linked to admin _id in database.
4.	Users can view approved blogs and read full content.
5.	Frontend communicates with backend via Axios.
6.	File uploads handled using FormData + Multer.

Notes
•	Admin credentials are predefined.
•	Both client-side and server-side validation implemented.
•	Login state persisted using LocalStorage.

