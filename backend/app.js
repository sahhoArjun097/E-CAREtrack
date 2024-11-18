import express  from "express";
import {config} from "dotenv"; // connect to config file
import cors from "cors";
import cookieParser from "cookie-parser";
import { dbConnection } from "./database/dbConnection.js";
import fileUploade from "express-fileupload"
import messageRouter from  "./router/messageRouter.js"


const app = express();
config({path:"./config/config.env"});
app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "DELETE", "POST", "PUT"],
    credentials: true,
  }));
  
app.use(cookieParser())
app.use(express.json())// use to transform data into json data as in the form of string
app.use(express.urlencoded({extended:true}));
app.use(fileUploade({
    useTempFiles:true,
    tempFilDir:"/tmp/",
}));



app.use("/api/v1/message",messageRouter);


// use to determine all type of data in the formate 
dbConnection();
export default app;
