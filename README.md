## Placemark Coffee Management Application 
## Author: Nathan Dolan
## Student No: 20059337


## Overview
Placemark Coffee is a web-based coffee shop management application developed using Node.js, Hapi, Handlebars, MongoDB Atlas and Render.

The application allows users to create accounts, authenticate securely, manage coffee shop records and maintain a cloud-hosted collection of Points of Interest (POIs). An administrative dashboard provides user management and analytics features, while a documented REST API supports programmatic access to application data.

This project was developed as part of a full-stack web application assignment and demonstrates:

•User authentication and authorisation
•Secure password hashing using bcrypt
•Session-based authentication using cookies
•JWT authentication for API access
•MongoDB Atlas integration
•Cloud deployment using Render
•REST API documentation using Swagger/OpenAPI
•Automated testing using Mocha and Chai
•Administrative user management
•Analytics dashboard functionality
•CRUD operations for coffee shop locations

## Technologies Used
## Backend
•Node.js
•Hapi.js
•MongoDB Atlas
•Mongoose
•JWT (JSON Web Tokens)
•bcrypt

## Frontend
•Handlebars
•HTML5
•CSS3

## Testing
•Mocha
•Chai

## Deployment
•Render
•MongoDB Atlas

## API Documentation
•Hapi Swagger
•OpenAPI

## Features
## User Accounts
Users can:

•Register a new account
•Log in
•Log out
•Update account information
•Maintain an authenticated session
•Passwords are securely hashed before storage using bcrypt.

## Coffee Shop Management
Authenticated users can:

•Create coffee shops
•View coffee shops
•Edit coffee shops
•Delete coffee shops

Each coffee shop contains:

•Name
•Description
•Category
•Image URL
•Latitude
•Longitude

## Categories
Coffee shops can be assigned to categories such as:

•Cafe
•Roastery
•Bakery
•Drive-Thru
•Coffee Cart
•Coffee Van

## Image Support
Each coffee shop can store an image URL.

Images are displayed on the dashboard alongside coffee shop details.

## Admin Dashboard
Administrative users can:

•View all registered users
•Delete users
•View application analytics

Analytics include:

•Total Users
•Admin Users
•Total POIs
•Categories Used

## REST API
The application exposes API endpoints for:

## GET
GET /api/pois
Returns all coffee shops.

## POST
POST /api/pois
Creates a new coffee shop.

## POST
POST /api/users/authenticate
Authenticates a user and returns a JWT token.

## JWT Authentication
JWT authentication is implemented for API endpoints.

Authenticated users can obtain a token through:

POST /api/users/authenticate
and use the token to access protected API resources.

## Swagger / OpenAPI
API documentation is available through Swagger.

Local URL:

http://localhost:3000/documentation
Swagger provides:

•Endpoint documentation
•Request details
•Response details
•API testing interface

## Project Structure
Coffee-pois/
│
├── public/
│
├── src/
│   ├── controllers/
│   ├── data/
│   ├── models/
│   ├── routes/
│   ├── scripts/
│   ├── utils/
│   ├── views/
│   └── server.js
│
├── test/
│
├── package.json
├── package-lock.json
└── README.md

## File Descriptions
## Root Files
package.json
Contains:

•Project metadata
•Dependencies
•npm scripts
package-lock.json
Locks dependency versions for consistent installation.

## Source Files
## server.js
Application entry point.

Responsible for:

•Creating the Hapi server
•Registering plugins
•Connecting MongoDB
•Configuring authentication
•Configuring Swagger
•Registering routes
•Starting the server

## Models

## db.js
Handles MongoDB Atlas connection using Mongoose.

## user.js
Mongoose schema for User documents.

Defines:

•Name
•Email
•Password
•Role
##poi.js
Mongoose schema for POI documents.

Defines:

•Name
•Description
•Category
•Image
•Latitude
•Longitude
•Legacy migration ID

## user-model.js
Provides user database functionality:

•Add User
•Authenticate User
•Update User
•Delete User
•Get User By Email
•Get All Users

Passwords are hashed using bcrypt.

## poi-model.js
Provides POI database functionality:

•Create POI
•Read POI
•Update POI
•Delete POI
•Retrieve All POIs

## Routes
## accounts-routes.js
Handles:

•Signup
•Login
•Logout
•Settings

## poi-routes.js
Handles:

•Add POI
•Edit POI
•Delete POI

## admin-routes.js
Handles:

•Admin dashboard
•User management
•Analytics display

## api-routes.js
Provides:

•REST API endpoints
•JWT authentication endpoint

## Controllers
## accounts-controller.js
Handles user settings and account management functionality.

##Scripts

## migrate-pois.js
Migration utility used to move POI records from JSON storage to MongoDB Atlas.

## Views

## dashboard.hbs
Main dashboard displaying all coffee shops.

## add-poi.hbs
Coffee shop creation form.

## edit-poi.hbs
Coffee shop editing form.

## admin-dashboard.hbs
Administration interface and analytics dashboard.

## login.hbs
Login page.

## signup.hbs
User registration page.

## settings.hbs
User account settings page.

## navbar.hbs
Shared navigation component.

## main.hbs
Main application layout template.

## Tests

## api-routes-test.js
API testing suite.

## jwt-test.js
JWT validation tests.

Verifies:

•Token creation
•Token decoding
•Invalid token rejection

## poi-model-test.js
CRUD tests for POI functionality.

Verifies:

•Create
•Read
•Update
•Delete

## user-model-test.js
User account tests.

Verifies:

•User creation
•User lookup
•Authentication

## swagger-test.js
Swagger/OpenAPI test validation.

## Installation

## Clone Repository
git clone <repository-url>
cd coffee-pois

## Install Dependencies
npm install

## Environment Variables
Create a .env file in the project root.

Example:

MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

## Running Locally
Start the application:

npm start
Application URL:

http://localhost:3000

## Running Tests
Execute the automated testing suite:

npm test
Expected result:

12 passing

## Running the Migration Script
To migrate legacy JSON POIs into MongoDB:

npm run migrate:pois

## Deployment
The application is deployed using:

•Render
•MongoDB Atlas
Deployment includes:

•Cloud hosted web application
•Cloud hosted database
•Environment variable configuration

## Known Issues

## Swagger Validation
Swagger documentation functions correctly and documents available API routes.

However, enabling Joi validation schemas on certain API routes may prevent Swagger from generating its specification correctly due to package compatibility issues between:

•hapi-swagger
•@hapi/joi
Validation blocks were therefore removed to maintain Swagger functionality.

## Image URLs
Images require direct image URLs.

Links copied directly from Google Images may not display correctly because they are often page URLs rather than image URLs.

Recommended image hosts include:

•Unsplash
•Wikimedia Commons
•Direct image hosting services

## Render Cold Starts
The Render free tier may occasionally take several seconds to start after periods of inactivity.

## Future Improvements
Potential future enhancements include:

•Interactive maps using Leaflet
•Search and filtering
•Image uploads
•Enhanced API coverage
•Improved dashboard visualisation
•Improved responsive design
•Additional analytics metrics

## References:

# References

Auth0 (n.d.) *jsonwebtoken: JSON Web Token implementation for Node.js*. Available at: [https://github.com/auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) 

Chai (n.d.) *Chai assertion library*. Available at: [https://www.chaijs.com/](https://www.chaijs.com/) 

DWYL (n.d.) *hapi-auth-jwt2: Hapi authentication using JSON Web Tokens*. Available at: [https://github.com/dwyl/hapi-auth-jwt2](https://github.com/dwyl/hapi-auth-jwt2) 

Hapi (n.d.) *Authentication*. Available at: [https://hapi.dev/tutorials/en_us/auth](https://hapi.dev/tutorials/en_us/auth) 

Hapi (n.d.) *Testing*. Available at: [https://hapi.dev/tutorials/en_us/testing](https://hapi.dev/tutorials/en_us/testing) 

MDN Web Docs (n.d.) *Array.prototype.filter()*. Available at: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 

MDN Web Docs (n.d.) *Array.prototype.map()*. Available at: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 

MDN Web Docs (n.d.) *Set*. Available at: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) 

Mocha (n.d.) *Mocha: JavaScript test framework*. Available at: [https://mochajs.org/](https://mochajs.org/) 

MongoDB (n.d.) *Get started with MongoDB Atlas*. Available at: [https://www.mongodb.com/docs/get-started/](https://www.mongodb.com/docs/get-started/) 

MongoDB (n.d.) *Integrate the MongoDB Node.js driver with Mongoose*. Available at: [https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/](https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/) 

MongoDB (n.d.) *Tutorial: Mongoose get started*. Available at: [https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/](https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/) 

Mongoose (n.d.) *Getting started with Mongoose*. Available at: [https://mongoosejs.com/docs/](https://mongoosejs.com/docs/) 

npm (n.d.) *hapi-auth-jwt2*. Available at: [https://www.npmjs.com/package/hapi-auth-jwt2](https://www.npmjs.com/package/hapi-auth-jwt2) 

npm (n.d.) *jsonwebtoken*. Available at: [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) 

Render (n.d.) *Deploy a Node application on Render*. Available at: [https://render.com/docs/deploy-node-express-app](https://render.com/docs/deploy-node-express-app) 

Render (n.d.) *Environment variables and secrets*. Available at: [https://render.com/docs/configure-environment-variables](https://render.com/docs/configure-environment-variables) 

Render (n.d.) *Web services*. Available at: [https://render.com/docs/web-services](https://render.com/docs/web-services) 

