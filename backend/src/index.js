import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
// import { server } from "./socketIO/server.js";

dotenv.config({
    path: "./.env",
});
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at Port: ${process.env.PORT}`);
        });
        // server.listen(process.env.PORT || 3001, () => {
        //     console.log(`Server is running at Port: ${process.env.PORT}`);
        // });
        // server.on("err", (error) => {
        //     console.log("My application is not talk to database", error);
        // });
    })
    .catch((err) => {
        console.log("Mongo db connection failed !!! ", err);
    });
