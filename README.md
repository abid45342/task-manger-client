Task Management Application

Description

A web-based Task Management Application that enables users to manage tasks efficiently with Firebase Authentication, real-time syncing, and drag-and-drop functionality using DnD Kit. Tasks are categorized as To-Do, In Progress, and Done.

Live Demo

Live Application (Replace with your actual deployment link)

Dependencies

React (Vite.js)

Firebase Authentication

MongoDB

Express.js

DnD Kit (for drag-and-drop functionality)

React Query (TanStack Query) for data fetching

Axios

Installation

Clone the repository:

git clone https://github.com/your-repo/task-manager.git
cd task-manager

Install dependencies:

npm install

Set up Firebase Authentication and MongoDB database.

Create a .env file in the root directory and add necessary environment variables:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_MONGO_URI=your_mongo_uri

Start the development server:

npm run dev

Technologies Used

Frontend: React (Vite.js), Tailwind CSS

Backend: Express.js, MongoDB

Authentication: Firebase Authentication

State Management: TanStack Query (React Query)

Drag & Drop: DnD Kit