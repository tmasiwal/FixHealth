const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  Degree: { type: String, required: true },
  Institution: { type: String, required: true },
  Year: { type: Number, required: true },
});

const experienceSchema = new mongoose.Schema({
  Position: { type: String },
  Hospital: { type: String },
  Location: { type: String },
});

// const appointmentSchema = new mongoose.Schema({
//   date: [String],
//   //   times: [String], // Array of appointment times
// });

const doctorSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Image: { type: String, required: true },
  About: { type: String, required: true },
  Education: [educationSchema],
  Experience: [experienceSchema],
  OfflineConsultationCharges: { type: Number, required: true },
  Appointment: { type: Map },
  Timings: { type: String, required: true }, // e.g., "08:00 - 14:00"
  ClinicLocation: { type: String, required: true },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
