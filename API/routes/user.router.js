import express from "express";
import * as userController from "../controller/user.controller.js"
var router = express.Router();

// router.get("/testapi",(req,res,next)=>{
//     console.log("web service request");
//     res.json({"msg":"Success"})
// });


router.post("/save",userController.save);

router.get("/fetch",userController.fetch);

router.delete("/delete/:id",userController.deleteUser);

router.patch("/update",userController.updateUser);

router.post("/login",userController.login);
export default router;