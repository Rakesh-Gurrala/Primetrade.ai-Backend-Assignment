Backend Intern Assignment — README

Simple, clear, copy-paste README for your internship project (Auth + Tasks/Products CRUD + React UI).
This README explains what the project does, technologies used, step-by-step setup (backend + frontend), environment variables, common commands (Windows-friendly), examples, testing, and extra notes (security, scalability, deployment).

Project summary

This project is a small full-stack internship assignment that demonstrates a secure, scalable backend with authentication and role-based access, plus a minimal frontend UI to interact with the APIs.

Core features:

User registration & login (bcrypt hashing + JWT)

Role-based access (user and admin)

CRUD APIs for a secondary entity — Products (Sweets) stored in MongoDB (Mongoose)
Example entity: sweets/products with fields like title, description, price, status, owner.

API versioning (/api/v1/...)

Input validation and centralized error handling

Basic frontend (React + Tailwind) for Register, Login, Dashboard (CRUD)

API documentation (Swagger or Postman collection)

README contains run instructions, troubleshooting, and deployment hints

Tech / Products used

Node.js (Express) — backend server

MongoDB — database (local or Atlas)

Mongoose — ODM for MongoDB (models + schema)

bcrypt — password hashing

jsonwebtoken (JWT) — authentication tokens

express-validator — request validation

helmet, cors, morgan — security & logging middleware

Swagger (swagger-ui-express) or Postman for API docs

React (Vite) — frontend UI

Axios — HTTP client from frontend

Tailwind CSS — styling (colorful backgrounds)

Optional: Redis (cache), Docker, Winston logging

Repository structure (important files)
backend-intern-assignment/
├── frontend/                      # React app (Vite + Tailwind)
└── src/                           # Backend code
    ├── app.js
    ├── server.js
    ├── config/
    │   └── db.js
    ├── controllers/
    │   ├── auth.controller.js
    │   └── product.controller.js  # or task.controller.js (Products = Sweets)
    ├── models/
    │   ├── user.model.js
    │   └── product.model.js
    ├── routes/
    │   ├── auth.routes.js
    │   └── product.routes.js
    ├── middleware/
    │   ├── auth.middleware.js
    │   ├── role.middleware.js
    │   └── error.middleware.js
    └── utils/
        └── generateToken.js

Example product (sweets) model (fields)

title (string) — name of sweet

description (string) — short description

price (number) — price in currency

status (string) — available / out-of-stock

owner (ObjectId) — user who created the product

timestamps (createdAt, updatedAt)

Environment variables (.env)

Create .env in the backend root (or copy from .env.example):

PORT=5000
MONGO_URI=mongodb://localhost:27017/intern_assignment_db
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
NODE_ENV=development


For production (MongoDB Atlas, strong JWT secret, HTTPS, etc.) set accordingly.

Quickstart — Backend (Windows PowerShell friendly)

Open PowerShell and go to backend folder:

cd C:\path\to\backend-intern-assignment


Install dependencies (if not already):

npm install


Copy env file and edit:

copy .env.example .env
# then open .env in your editor and fill values (MONGO_URI, JWT_SECRET)


Start dev server:

# use nodemon for auto reload (if installed)
npm run dev

# fallback start
npm start


Check API health:
Open browser → http://localhost:5000/api/health (should return JSON success)

Quickstart — Frontend (Windows PowerShell friendly)

Go to frontend folder:

cd C:\path\to\backend-intern-assignment\frontend


Install frontend dependencies:

npm install


If Tailwind was not set up yet, initialize (PowerShell friendly):

# install tailwind deps
npm install -D tailwindcss postcss autoprefixer

# generate config (use explicit CLI to avoid npx issues)
npx --yes tailwindcss-cli@latest init -p


Start frontend dev server:

npm run dev


Open: http://localhost:5173/ (or the URL printed by Vite)

Useful npm scripts (suggested in package.json)

Backend package.json

"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}


Frontend package.json

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"     // if using gh-pages
}

API endpoints (examples)
Auth

POST /api/v1/auth/register
body: { "username": "Rakesh", "email": "r@ex.com", "password": "secret123" }
returns: user data + token

POST /api/v1/auth/login
body: { "email": "r@ex.com", "password": "secret123" }
returns: user data + token

Products (Sweets)

GET /api/v1/products — get all (admin sees all, user sees own)

POST /api/v1/products — create product (protected)
body example: { "title": "Gulab Jamun", "description":"Sweet dumplings", "price": 50, "status":"available" }

GET /api/v1/products/:id — get single

PUT /api/v1/products/:id — update (owner or admin)

DELETE /api/v1/products/:id — delete (owner or admin)

Pass JWT in Authorization header:

Authorization: Bearer <token>

Sample curl commands

Register:

curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"Rakesh","email":"rakesh@example.com","password":"secret123"}'


Login:

curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"rakesh@example.com","password":"secret123"}'


Create product:

curl -X POST http://localhost:5000/api/v1/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"title":"Rasgulla","description":"Soft cheese sweet","price":40}'

Swagger / Postman

Swagger: src/swagger/swagger.json + swagger-ui-express — UI available at http://localhost:5000/api-docs

Postman: create a collection with endpoints above. Export and include postman_collection.json in repo root.

Security best practices (what I used / recommend)

Store JWT secret in environment variables (never commit to repo)

Hash passwords with bcrypt (salt rounds >= 10)

Use helmet() and cors() middlewares on backend

Validate inputs (express-validator) to avoid injection

Use HTTPS in production and set secure cookie flags if storing tokens in cookies

Set short-lived JWT tokens and refresh tokens if needed

Rate-limit authentication endpoints (prevent brute force)

Scalability notes (short)

Separate services: move auth, product service, and frontend into microservices when load increases.

Use Redis for caching frequently requested product lists.

Containerize with Docker and orchestrate with Kubernetes for scale & resilience.

Use load balancer (NGINX / cloud LB) and horizontal autoscaling.

Use a managed DB (MongoDB Atlas) with replica sets for availability.

Centralized logging (Winston + ELK / Grafana) and distributed tracing.

Testing & Debugging tips

Check server logs (console) for stack traces; use morgan for request logs.

If npx tailwindcss fails on Windows: remove node_modules + package-lock.json, run npm cache clean --force, reinstall, then npx --yes tailwindcss-cli@latest init -p.

If Vite complains about PostCSS + module type: rename postcss.config.js → postcss.config.cjs.

If MongoDB connection fails, verify MONGO_URI and that MongoDB is running (mongod).

Deployment hints

Backend: Deploy to Heroku / Render / Railway / DigitalOcean App Platform. Add environment variables in platform settings. Use Procfile if needed.

Frontend: Deploy static build to Vercel, Netlify, or GitHub Pages (Vercel easiest for Vite).

Use a CI workflow (GitHub Actions) to run tests, build, and deploy automatically on push to main.

Extras you can add (optional improvement ideas)

Add refresh tokens (secure rotation)

Add file/image upload (e.g., product images) using S3 or Cloudinary

Add search, pagination, and filters for products

Add role management UI for admin users

Add unit & integration tests (Jest & Supertest)

Add Dockerfile for both backend and frontend and a docker-compose.yml for local dev

Troubleshooting quick Q&A

Q: Vite/PostCSS/Tailwind errors?
A: Ensure postcss.config.cjs exists, contains module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } }, and run npx --yes tailwindcss-cli@latest init -p if npx tailwindcss fails.

Q: module is not defined error?
A: Rename postcss.config.js to postcss.config.cjs. This fixes CommonJS vs ESM mismatch.

Q: Mongo connection refused?
A: Confirm MongoDB is running and MONGO_URI is correct. For local dev, start mongod or use MongoDB Atlas and paste the connection string.

🧩 1️⃣ Postman Collection — intern-assignment.postman_collection.json
📌 How to use:

Open Postman → Import → Upload this .json file.

Register a new user → Login → copy token.

Paste token into the “token” variable in Postman’s environment → Run CRUD APIs.


Final notes & credits

This repo demonstrates secure backend patterns and a minimal but functional frontend to interact with APIs. It’s a good starting point for interviews or an internship assignment.

Author / Maintainer: Rakesh Gurrala
