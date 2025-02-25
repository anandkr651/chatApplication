// import {Server} from "socket.io"
// import http from "http"
// import express from "express";

// const app = express();
// const server=http.createServer(app)
// const io=new Server(server,{
//     cors:{
//         origin: "*",
//         methods:["GET","POST"],
//     }
// })

// //used to listen events on server size
// io.on("connection",(socket)=>{
//     console.log("a user connected",socket.id);
//     //used to listen client side event emitted by server side(server,client)
//     socket.on("disconnect",()=>{
//         console.log("a user disconnected",socket.id); 
//     })
// })

// export{app,io,server}