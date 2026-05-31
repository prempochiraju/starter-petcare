# Starter Petcare

Starter Petcare is a pet care website with a static HTML/CSS/JavaScript frontend and an Express/MongoDB backend for user signup and login.

## Project Structure

```text
starter-petcare/
|-- starter-petcare/      # Frontend website files
|   |-- index.html        # Homepage
|   |-- sign1.html        # Login and signup page
|   |-- signup.html       # Signup page
|   |-- css/              # Stylesheets
|   |-- js/               # Frontend JavaScript and API config
|   `-- img/              # Images
`-- backend/              # Express API
    |-- server.js         # API server and MongoDB connection
    |-- routes/auth.js    # Register and login routes
    |-- models/User.js    # User database model
    `-- .env.example      # Example environment variables
```

## Features

- Pet care landing page
- Pricing and signup pages
- User registration API
- User login API
- Password hashing with bcrypt
- MongoDB storage with Mongoose
- Configurable CORS for hosted frontend domains

## Frontend Setup

The frontend is a static website. Open this file in a browser:

```text
starter-petcare/index.html
```

For login and signup to work, the backend must be running and the API URL must be set in:

```text
starter-petcare/js/config.js
```

Local default:

```js
window.PETCARE_API_URL = window.PETCARE_API_URL || "http://localhost:5000/api/auth";
```

When deployed, replace this with the hosted backend URL:

```js
window.PETCARE_API_URL = window.PETCARE_API_URL || "https://your-backend-url.vercel.app/api/auth";
```

## Backend Setup

Go into the backend folder:

```powershell
cd backend
npm install
```

Create a local `.env` file by copying `.env.example`:

```env
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=replace_with_a_long_random_secret
PORT=5000
FRONTEND_URLS=http://127.0.0.1:8080,https://your-frontend-domain.example
```

Start the backend:

```powershell
npm start
```

The API will run locally at:

```text
http://localhost:5000/api/auth
```

## API Routes

Register a user:

```text
POST /api/auth/register
```

Request body:

```json
{
  "name": "Example User",
  "email": "user@example.com",
  "password": "password123"
}
```

Login a user:

```text
POST /api/auth/login
```

Request body:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

## Deployment Notes

Recommended hosting:

- Frontend: Vercel, Netlify, or GitHub Pages
- Backend: Vercel, Render, or Railway
- Database: MongoDB Atlas

Do not commit real secrets to GitHub. Keep local secrets in `backend/.env` and add production secrets in the hosting provider's environment variable settings.

Required backend environment variables:

```text
MONGO_URI
JWT_SECRET
FRONTEND_URLS
```

For Vercel backend deployment, use `backend` as the root directory.

For Vercel frontend deployment, use `starter-petcare` as the root directory.
