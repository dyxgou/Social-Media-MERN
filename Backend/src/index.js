// Importing

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet"
import morgan from 'morgan'

// Importing Files 

import userRouter from "./routes/users.route.js"
import authRouter from "./routes/auth.router.js"
import postsRouter from "./routes/posts.router.js"

// Inicialitzation

const app = express();
dotenv.config();

// Config
const port = process.env.PORT || 8000;



// Middleware

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

// Routes
app.get('/' , (req , res)=>{
  res.send("Welcome to the home page")
})

app.get('/users' , (req , res)=>{
  
  res.get("Welcome to the users page")
})

// Router use 
app.use("/api/users" , userRouter)
app.use("/api/auth" , authRouter)
app.use("/api/posts" , postsRouter)


// DB Cofig

mongoose.connect(process.env.MONGO_URL , {
  useNewUrlParser : true
} , () => console.log("Mongo is Connected to the database"))

// Listener

app.listen(port, () =>
  console.log(`The server is listening on the port ${port}`)
);
