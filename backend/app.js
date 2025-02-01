import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dbConnection } from "./database/dbConnection.js";
import fileUpload from "express-fileupload";
import messageRouter from "./router/messageRouter.js"
import { errorMiddleware } from "./middlewares/errorMiddleware.js"
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
import config from "./config/index.js";
const app = express();
app.use(cors({
  origin: [config.FRONTEND_URL, config.DASHBOARD_URL],
  methods: ["GET", "DELETE", "POST", "PUT"],
  credentials: true,
}));
// app.use(cors({ origin: '*', credentials: true }));

app.use(cookieParser())
app.use(express.json())// use to transform data into json data as in the form of string
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  useTempFiles: true, // Allows temporary storage of files
  tempFileDir: "/tmp/",
}));
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);
// use to determine all type of data in the formate 
dbConnection();
app.use(errorMiddleware)
export default app;




