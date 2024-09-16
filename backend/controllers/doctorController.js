import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";

// fuction for add Doctor
const addDoctor = async (req, res) => {
  try {
    const { name, about, fees, speciality, experience, degree, date, address } =
      req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const doctorData = {
      name,
      about,
      fees: Number(fees),
      speciality,
      experience,
      degree,
      date: Date.now(),
      address,
      image: imagesUrl,
    };

    const doctor = new doctorModel(doctorData);
    await doctor.save();

    res.json({ success: true, message: "Doctor added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// fuction for list Doctors
const listDoctors = async (req, res) => {};

// fuction for removing Doctor
const removeDoctor = async (req, res) => {};

// fuction for single Doctor info
const singleDoctor = async (req, res) => {};

export { addDoctor, listDoctors, removeDoctor, singleDoctor };
