import express from "express";
import cookieParser from "cookie-parser";
// import { app } from "./socketIO/server.js";
import cors from "cors"

const app = express();
app.use(
    cors({
        origin: process.env.CORS_ORIGN,
        credentials: true,
    })
);
// app.use(cors())
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser()); 

import userRoute from "./routes/user.routes.js";
app.use("/api/v1/users",userRoute);

import messageRoute from "./routes/message.routes.js";
app.use("/api/v1/messages",messageRoute);

export default app