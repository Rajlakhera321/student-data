const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 6000

dotenv.config();

mongoose.connect(
    process.env.DB_connect,
    { useUnifiedTopology: true, useNewUrlParser: true},
    ()=> console.log("connected to db")
);

//Add router
const studentRoutes = require("./routers/student");

//Middlwares
app.use(express.json());
app.use(cors());

//route Middlewares
app.use("/api/students", studentRoutes);

app.listen(port,() => console.log(`This is running on port ${port}`));