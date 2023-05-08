import  express  from "express";
import dotenv from "dotenv"

import mongoose from "mongoose";

const app = express()
dotenv.config();

app.use(express.json())

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

app.listen("5000", () => {
    connect();
    console.log("running backend");
})