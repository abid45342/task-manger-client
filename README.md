# Task Management Application

## Description
A web-based Task Management Application that enables users to manage tasks efficiently with Firebase Authentication, real-time syncing, and drag-and-drop functionality using DnD Kit. Tasks are categorized as To-Do, In Progress, and Done.
---
## Live Demo

## Live Application [https://to-do-b072a.web.app/]

## Dependencies
---
  "devDependencies": {
    "@eslint/js": "^9.19.0",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "@vitejs/plugin-react": "^4.3.4",
    "daisyui": "^5.0.0-beta.8",
    "eslint": "^9.19.0",
    "eslint-plugin-react": "^7.37.4",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.18",
    "globals": "^15.14.0",
    "vite": "^6.1.0"
  }
---

## Installation
---
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
---
## Technologies Used
---
Frontend: React (Vite.js), Tailwind CSS

Backend: Express.js, MongoDB

Authentication: Firebase Authentication

State Management: TanStack Query (React Query)

Drag & Drop: DnD Kit
---