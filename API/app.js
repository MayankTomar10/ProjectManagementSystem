import express from "express";
import bodyParser from "body-parser";
import url from "url";
import path from "path"
import cors from "cors";
import fileUpload from "express-fileupload";
var app = express();
// to extract body data from request (POST ,PUT DELETE , PATCH, GET)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// to link routes
import userRouter from "./routes/user.router.js";
import ProjectRouter from "./routes/project.router.js";
import  GroupRouter from "./routes/group.router.js"

// to resolve cross origin problem
app.use(cors());

// to resolve file content 
app.use(fileUpload());

// to redirect load api  routes // route level middleware
app.use("/user",userRouter);
app.use("/project",ProjectRouter)
app.use("/group",GroupRouter)


app.listen(3001);
console.log("server invoked at link http://localhost:3001");