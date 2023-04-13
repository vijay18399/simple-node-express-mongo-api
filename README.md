# simple-node-express-mongo-api

This is a simple REST API built with Node.js, Express, and MongoDB. It provides basic CRUD (Create, Read, Update, Delete) operations for a User model.

## Getting Started

To get started with this API, you will need to have Node.js and MongoDB installed on your system. You can download Node.js from the official website (https://nodejs.org/) and MongoDB from the official website (https://www.mongodb.com/).

Once you have installed these dependencies, follow these steps:

1. Clone this repository to your local machine using `git clone`.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project's dependencies.
4. Create a `.env` file in the project directory and add your MongoDB connection string, like this: `DB_URL=mongodb://localhost/my-database`.
5. Run `npm start` to start the server.

## Usage

This API provides the following endpoints for working with User objects:

- `GET /users` - Returns a list of all users.
- `GET /users/:id` - Returns a single user by ID.
- `POST /users` - Creates a new user.
- `PUT /users/:id` - Updates an existing user by ID.
- `DELETE /users/:id` - Deletes an existing user by ID.

To use these endpoints, you can send HTTP requests to the server using a tool like Postman (https://www.postman.com/) or using your own code.

The requests should include a JSON payload with the relevant data for each operation. For example, to create a new user, you can send a POST request to `/users` with a payload like this:

```json
{
  "name": "Vijay",
  "age": 24,
  "contact": {
    "mobile": 1234567890,
    "email": "vijay@example.com"
  },
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "AP",
    "pincode": 12345
  }
}

