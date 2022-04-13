import express from 'express'
import connectDB from './config/db.js';
// import mongoose from "mongoose"
// import cors from "cors"
// import path from "path";
// import { createServer } from "http";
// import { Server } from "socket.io";
// import nodemailer from "nodemailer"; 
// import { response } from 'express';
// const __dirname = path.resolve();
import dotenv from "dotenv"
// dotenv.config({ path: './config.env' })

import auth from './router/auth.js'
import User from "./models/userSchema.js"


const PORT = process.env.PORT || 5000
const app = express()

dotenv.config();
connectDB();

app.use(express.json()); // to accept json data



app.use('/', auth)




app.listen(PORT, function () {
    console.log("server is running on", PORT);
})