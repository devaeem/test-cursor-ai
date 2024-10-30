import mongoose from "mongoose";

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/yourDatabaseName")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define a User schema
