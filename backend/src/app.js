import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
    cors({
        origin: process.env.CORS_ORIGN,
        credentials: true,
    })
);
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser()); 

import userRoute from "./routes/user.routes.js";
app.use("/api/v1/users",userRoute);

export default app