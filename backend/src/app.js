import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import {app} from "./SocketIO/server.js"

app.use(cors())
app.use(express.json());
app.use(cookieParser());

import userRoute from "./routes/user.routes.js";
import messageRoute from "./routes/message.routes.js";

app.use("/api/users", userRoute);
app.use("/api/messages", messageRoute);

// export default app;
// const app = express();
// app.use(
//     cors({
//         origin: process.env.CORS_ORIGN,
//         credentials: true,
//     })
// );