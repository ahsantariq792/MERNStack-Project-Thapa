import express from 'express'
import connectDB from './config/db.js';
// import mongoose from "mongoose"
import cors from "cors"
// import path from "path";
// import { createServer } from "http";
// import { Server } from "socket.io";
// import nodemailer from "nodemailer"; 
// import { response } from 'express';
// const __dirname = path.resolve();
import dotenv from "dotenv"
import auth from './router/auth.js'
import cookieParser from 'cookie-parser';


const PORT = process.env.PORT || 5000
const app = express()
app.use(cookieParser())

dotenv.config();
connectDB();

app.use(express.json()); // to accept json data

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    credentials: true
}))


app.use('/api/v1', auth)




app.listen(PORT, function () {
    console.log("server is running on", PORT);
})