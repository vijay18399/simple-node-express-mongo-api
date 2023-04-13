const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./utils/errorHandler");
require('dotenv').config();
const app = express();

// Parse JSON request bodies
app.use(bodyParser.json());

// Define the routes for user requests
app.use("/users", userRoutes);

// error handling middleware
app.use(errorHandler);

// Start the server
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;

// Connect to database and start server
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
  })
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error.message);
    process.exit(1);
  });
