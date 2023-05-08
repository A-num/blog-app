const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

const connect = () => {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("Connected to MongoDB!");
      })
      .catch((err) => {
        throw err;
      });
  };

app.use("/api/auth", authRoute)
app.listen("5000", () => {
    connect();
    console.log("running backend");
})