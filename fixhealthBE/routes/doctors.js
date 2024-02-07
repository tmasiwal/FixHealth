const express = require("express");
const Doctor = require("../models/doctors");
const doctorsRoutes = express.Router();
// get DOCTOR data

doctorsRoutes.get("/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const doctors = await Doctor.find({ ClinicLocation: city });

    if (doctors && doctors.length > 0) {
      res.status(200).json(doctors);
    } else {
      res.status(404).json("Doctors not found in the specified city");
    }
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json("Internal Server Error");
  }
});
// Route to find available doctors in a given city for a specific date and time
doctorsRoutes.post("/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const date = req.body.date;
    const time = req.body.time;

    const doctors = await Doctor.find({ ClinicLocation: city });

    if (!doctors || doctors.length === 0) {
      return res
        .status(404)
        .json({ message: "No doctors found in the specified city" });
    }

    const availableDoctors = [];

    for (const doctor of doctors) {
      const appointments = doctor.Appointment;

      if (appointments) {
        const availableTimes = appointments.get(date)|| [];
        
        if (availableTimes.length == 0 || !availableTimes.includes(time)) {
          availableDoctors.push(doctor);
        }
      }
    }

    if (availableDoctors.length === 0) {
      return res.status(404).json({
        message: "No available doctors for the specified date and time",
      });
    }

    res.status(200).json(availableDoctors);
  } catch (error) {
    console.error("Error fetching available doctors:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// update availabiliti for the specified doctor with date and time

doctorsRoutes.patch("/:id", async (req, res) => {
  const date = req.body.date;
  const time = req.body.time;
  try {
    const id = req.params.id;
    let doctor = await Doctor.findOne({ _id: id });
    let availability = doctor.Appointment;

    if (availability.get(date)) {
    
      let timesArray = availability.get(date);
      timesArray.push(time);
      availability.set(date, timesArray);
    } else {
      
      availability.set(date, [time]);
    }
    
    // Update the availability in the document without overwriting the existing data
    await Doctor.findByIdAndUpdate(
      { _id: id },
      { $set: { Appointment: availability } }
    );
    //doctor.set("Appointment", availability);
    

    res.status(200).json({ message: "Appointment updated successfully" });
  } catch (error) {
    console.error("Error updating appointment:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = doctorsRoutes;
