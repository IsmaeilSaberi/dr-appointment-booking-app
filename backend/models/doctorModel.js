import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  about: { type: String, required: true },
  fees: { type: Number, required: true },
  image: { type: Array, required: true },
  speciality: { type: String, required: true },
  experience: { type: String, required: true },
  degree: { type: String, required: true },
  date: { type: Number, required: true },
  address: { type: Object, required: true },
});

const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

export default doctorModel;
