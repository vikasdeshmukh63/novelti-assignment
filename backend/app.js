const dotenv = require("dotenv").config()
const express = require("express");
const cors = require("cors")
const app = express();
const dbConnect = require("./dbConfig/dbConfig");
const userRoutes = require("./routes/userRoute");
const phoneRoutes = require("./controllers/phoneCodeController")

// using middleware
app.use(cors({
    origin:["https://novelti-assignment.vercel.app/"],
    methods:["POST","GET"],
    credentials:true
}));
app.use(express.json());

// connecting to database
dbConnect();

//routes
app.use("/api/v1", userRoutes);
app.use("/api/v1",phoneRoutes);

// creating server 
app.listen(process.env.PORT, () => {
    console.log(`server has started on port ${process.env.PORT}`);
});