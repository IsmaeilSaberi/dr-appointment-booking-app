import express from "express";
import {
  addDoctor,
  listDoctors,
  removeDoctor,
  singleDoctor,
} from "../controllers/doctorController.js";
import upload from "../middleware/multer.js";

const doctorRouter = express.Router();

doctorRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addDoctor
);
doctorRouter.get("/list", listDoctors);
doctorRouter.post("/remove", removeDoctor);
doctorRouter.post("/single", singleDoctor);

export default doctorRouter;
