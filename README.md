# Pinterest Clone

## Overview
A full-stack Pinterest-inspired application built with React and Express that allows users to discover, save, and create visual content.

## Features
- User authentication (register, login, logout)
- Pin creation with customizable text/canvas options
- Board management system
- Social interactions (follow, like, save)
- Comment system
- Search functionality
- Responsive design

## Tech Stack
### Frontend
- React
- React Router
- React Query (TanStack Query)
- CSS

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication
- ImageKit for image processing

## API Endpoints

### User Routes
- `POST /users/auth/register` - Register new user
- `POST /users/auth/login` - Login user
- `GET /users/auth/logout` - Logout user
- `GET /users/:username` - Get user profile
- `POST /users/:username/follow` - Follow/unfollow user

### Pin Routes
- `GET /pins` - Get pins (supports pagination)
- `GET /pins/:id` - Get specific pin
- `POST /pins` - Create new pin
- `GET /pins/:id/interactions` - Check pin interactions
- `POST /pins/:id/interact` - Like or save pin

### Board Routes
- `GET /boards/:userId` - Get user boards
- `POST /boards` - Create new board

### Comment Routes
- `GET /comments/:pinId` - Get pin comments
- `POST /comments/:pinId` - Add comment to pin

## Installation
1. Clone the repository
2. Install dependencies for both frontend and backend
   ```
   cd client && npm install
   cd server && npm install
   ```
3. Set up environment variables
4. Start the backend server
   ```
   cd server && npm start
   ```
5. Start the frontend development server
   ```
   cd client && npm run dev
   ```

## Environment Variables
### Backend
- PORT
- MONGODB_URI
- JWT_TOKEN
- CLIENT_URL
- IMAGEKIT_PUBLIC_KEY
- IMAGEKIT_PRIVATE_KEY
- IMAGEKIT_URL_ENDPOINT

## Project Structure
```
├── client/             # Frontend React application
│   ├── src/
│   │   ├── Components/ # Reusable UI components
│   │   ├── Routes/     # Page components
│   │   ├── Utility/    # Utilities and stores
│   │   └── main.jsx    # Entry point
└── server/             # Backend Express application
    ├── Models/         # MongoDB schemas
    ├── Routes/         # API routes
    ├── Utilities/      # Helper functions
    └── index.js        # Entry point
```

## License
MIT