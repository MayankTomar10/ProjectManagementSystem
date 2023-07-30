import '../model/connection.js';
import ProjectSchemaModel from '../model/project.model.js';
import url from 'url';
import path from "path";

const __dirname = url.fileURLToPath(new URL('.',import.meta.url));

export const save=async (req,res,next)=>{
  var pdocobj = req.files.file;
  var projectList=await ProjectSchemaModel.find().sort({"_id":-1});
  var _id=(projectList.length==0?1:projectList[0]._id+1);
  var projectDetails={...req.body,"_id":_id,"pdocname":pdocobj.name};
  var p=await ProjectSchemaModel.create(projectDetails);
  if(p){
    let fileuploadpath =path.join(__dirname,"../../myreactapp/public/assets/uploads/Project_Requirement_Docs",pdocobj.name)
    pdocobj.mv(fileuploadpath);
   return res.status(201).json({"status":true});
  }
  else
   return res.status(500).json({"status": false});
}

export const fetch=async (req,res,next)=>{
  var condition_object=url.parse(req.url,true).query;
  var projectList = await ProjectSchemaModel.find(condition_object);
  if(projectList.length!=0)
    return res.status(201).json(projectList);
  else
    return res.status(500).json({"result": "Server Error"});
}

export const deleteProject=async(req,res,next)=>{
  var condition_obj=JSON.parse(req.body.condition_obj);          
  var projectList = await ProjectSchemaModel.find(condition_obj);
  if(projectList.length!=0){
    let result = await ProjectSchemaModel.deleteMany(condition_obj); 
    if(result)
     return res.status(201).json({"msg":"record deleted successfully...."});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"}); 
}

export const updateProject=async(req,res,next)=>{
  let pDetails = await ProjectSchemaModel.findOne(JSON.parse(req.body.condition_obj));
  if(pDetails){
     let result=await ProjectSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
     if(result)
      return res.status(201).json({"msg":"record updated successfully"});
     else
      return res.status(500).json({error: "Server Error"});
  }
  else
   return res.status(404).json({error: "Requested resource not available"});
}