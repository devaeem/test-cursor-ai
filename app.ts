import express, { Request, Response } from "express";
import dotenv from "dotenv";
import crudRoutes from "./routes/crudRoutes";
import "./database"; // Import the database connection

// Load environment variables from .env file
dotenv.config();

const app = express();

// Use the PORT from the environment variables, default to 3000 if not set
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

// Use the CRUD routes
app.use("/api", crudRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
