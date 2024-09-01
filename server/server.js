import express from "express";
import userRouter from "./routes/userRoute.js";


import mongoose from "mongoose";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json())
app.listen(5000, () => {
    console.log("conne dsds");
})

mongoose
  .connect(
    "mongodb+srv://gagandeep_12:Gagandeep@cluster0.qrkrg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected");
  })
    .catch(() => [console.log("Not connected")]);
 app.use("/api/auth",userRouter)
