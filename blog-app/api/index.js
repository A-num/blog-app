const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

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

  const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
      cb(null, "images")
    }, filename:(req,file,cb) =>{
      cb(null,"hello.jpg");
    },
  });

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req,res) => {
  res.status(200).json("file has been uploaded");
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("3000", () => {
    connect();
    console.log("running backend");
})