import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import applicationRoutes from "./routes/applicationRoutes";
import axios from "axios";
import cron from "node-cron";

import verifierRoutes from "./routes/verifierRoutes";
import adminRoutes from "./routes/adminRoutes";
import loanRoutes from "./routes/loanRoutes";




dotenv.config();

const app = express();

// Middleware


app.use(cors({
  origin: 'https://credit-sea-assignment-gray.vercel.app',  // Allow only this frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/applications", applicationRoutes);
app.use("/verifier", verifierRoutes);
app.use("/admin", adminRoutes);
app.use("/loan", loanRoutes);


// Root Route
app.get("/", (req, res) => {
  res.send("Hello from  Rajeev Ranjan , The backend api is running");
});

cron.schedule("*/15 * * * *", async () => {
  try {
    const response = await axios.get("https://credit-sea-loan-management.onrender.com");
    console.log("Cron job executed: ", response.data);
  } catch (error) {
    console.error("Error in cron job request:");
  }
});

// Server Listening
const PORT = process.env.PORT ?? 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
