import url from "url"
import jwt from "jsonwebtoken"
import "../model/connection.js";
import userSchemaModel from "../model/user.schema.js";

import { sendMail } from "./email.controller.js";

export var save = async (req,res)=>{
    var userDetails = req.body
    var userList = await userSchemaModel.find();

    var l = userList.length;
    var _id =(l==0)?1:userList[l-1]._id+1;
    userDetails = {...userDetails,"_id":_id,"status":0,"role":"user","info":Date()};
    
    var user = await userSchemaModel.create(userDetails);
    if(user){
        sendMail(user.email,user.password);
        res.status(201).json({"msg":"Sucess"})
    }
    else
        res.status(500).json({"error":"Server ERROR"})
}

export var fetch = async (req,res)=>{
    var condition_obj = url.parse(req.url,true).query
    var userList = await userSchemaModel.find(condition_obj);
    if(userList.length!=0)
    res.status(201).json(userList);
    else
    res.status(500).json({"result":"Server ERROR"});
}

export var deleteUser = async (req,res)=>{
    var id = req.params.id;
    var user = await userSchemaModel.find({_id:id});
    if(user){
        var result= await userSchemaModel.deleteMany({_id:id})
        if(user)
        res.status(201).json({"msg" : "success"});
        else
        res.status(500).json({"error":"Server error"})
    }
    else
    res.status(404).json({Error:"Resource not found"})

}

export var updateUser = async (req,res)=>{
    var user = await userSchemaModel.findOne(req.body.condition_obj);
    if(user){
        var userDetails = await userSchemaModel.updateOne(req.body.condition_obj,{$set : req.body.content_obj});
        if(userDetails)
        res.status(201).json({"msg" : "record updated success"});
        else
        res.status(500).json({"error":"Server error"})
    }else
    res.status(404).json({Error:"Resource not found"})

}

export var login = async (req,res)=>{
    var userDetails = req.body;
    userDetails = {...userDetails,"status":1};
    var userList = await userSchemaModel.find(userDetails);
    if(userList.length!=0){
        var payload = {"subject": userList[0].email}
        var token = jwt.sign(payload,"djiajkdjl");
        res.status(201).json({"token":token,"userDetails":userList[0]});
    }
    else
    res.status(500).json({"token":"Error"})

}

// control flow : javascript flow like 
// arry and object diffrence
// interface class 