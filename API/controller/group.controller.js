import '../model/connection.js';
import GroupSchemaModel from '../model/group.model.js';
import url from 'url';

export const save=async (req,res,next)=>{
  var groupList=await GroupSchemaModel.find().sort({"_id":-1});
  var _id=(groupList.length==0?1:groupList[0]._id+1);
  var groupDetails={...req.body,"_id":_id};
  var p=await GroupSchemaModel.create(groupDetails);
  if(p)
   return res.status(201).json({"status":true});
  else
   return res.status(500).json({"status": false});
}

export const fetch=async (req,res,next)=>{
  var condition_object=url.parse(req.url,true).query;
  var groupList = await GroupSchemaModel.find(condition_object);
  if(groupList.length!=0)
    return res.status(201).json(groupList);
  else
    return res.status(500).json({"result": "Server Error"});
}

export const deleteGroup=async(req,res,next)=>{
  var condition_obj=JSON.parse(req.body.condition_obj);          
  var groupList = await GroupSchemaModel.find(condition_obj);
  if(groupList.length!=0){
    let result = await GroupSchemaModel.deleteMany(condition_obj); 
    if(result)
     return res.status(201).json({"msg":"record deleted successfully...."});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"}); 
}

export const updateGroup=async(req,res,next)=>{
  let gDetails = await GroupSchemaModel.findOne(JSON.parse(req.body.condition_obj));
  if(gDetails){
     let result=await GroupSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
     if(result)
      return res.status(201).json({"msg":"record updated successfully"});
     else
      return res.status(500).json({error: "Server Error"});
  }
  else
   return res.status(404).json({error: "Requested resource not available"});
}

