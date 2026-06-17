const express = require("express");
const cors=require("cors");
const app=express();
const transactionRoutes = require("./routes/transactionRoutes");
require("dotenv").config();
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
app.use("/api/transactions", transactionRoutes);
app.get("/",(req,res)=>{
    res.send("Expense Tracker API running");
});
const PORT=5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
