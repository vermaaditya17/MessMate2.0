import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/Database.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";



dotenv.config();

connectDB();

const app = express();

app.use(cors({
    origin: [
     
      "https://mess-mate2-0.vercel.app/",
    ],
    credentials: true,
  }));

app.use(express.json());

//Routes
app.use("/api/users", userRoutes)
app.use("/api/admin", adminRoutes)

app.get("/", (req, res) => {
  res.send("MessMate Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});