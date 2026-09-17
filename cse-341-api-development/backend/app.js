require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");
const professionalRoutes = require("./routes/professional");

const port = process.env.PORT || 8080;
const app = express();

// 1. Parse incoming JSON requests
app.use(bodyParser.json());

// 2. Configure complete CORS headers to allow frontend access
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Z-Key",
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  next();
});

// 3. Setup your application routes
app.use("/professional", professionalRoutes);

// 4. Initialize real MongoDB Atlas connection and start listening on port 8080
mongodb.initDb((err, mongodbInstance) => {
  if (err) {
    console.log("Database connection failed. Fallback error message:", err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to real MongoDB and listening on port ${port}`);
    });
  }
});
