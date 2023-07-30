import express from 'express';
const router = express.Router();

//import controller
import * as GroupController from '../controller/group.controller.js'; 

router.post("/save",GroupController.save);

router.get("/fetch",GroupController.fetch);

router.delete("/delete",GroupController.deleteGroup);

router.patch("/update",GroupController.updateGroup);

export default router;