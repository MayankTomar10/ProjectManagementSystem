import express from 'express';
const router = express.Router();

//import controller
import * as ProjectController from '../controller/project.controller.js'; 

router.post("/save",ProjectController.save);

router.get("/fetch",ProjectController.fetch);

router.delete("/delete",ProjectController.deleteProject);

router.patch("/update",ProjectController.updateProject);

export default router;