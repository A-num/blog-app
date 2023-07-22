const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

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

app.use("/api/auth", authRoute);
app.use("/api/auth", userRoute);

app.listen("3000", () => {
    connect();
    console.log("running backend");
})