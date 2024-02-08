import React, { useEffect, useState } from "react";
import "../Styles/BookingForm.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import AOS from "aos";

const BookingForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFormData = {
    name: "",
    phoneNumber: "",
    age: "",
    city: searchParams.get("city") || "",
    company: "",
    complaints: "",
    previousExperience: null,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [doctorData, setDoctorData] = useState([]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const newValue = checked ? value : null;
      setFormData((prevState) => ({
        ...prevState,
        [name]: newValue,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      if (name === "city") {
        setSearchParams({ ...searchParams, city: value });
      }
    }
  };
  console.log(searchParams.get("city"));

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData(initialFormData);
    // Clear URL params
    setSearchParams({ ...searchParams, city: value });
  };
  const getDoctorsData = () => {
    axios
      .get(`https://dgd-4g2l.onrender.com/doctors/${formData.city}`)
      .then((res) => setDoctorData(res.data));
  };

  useEffect(() => {
    getDoctorsData();
     AOS.init();
  }, [formData.city]);
  console.log(doctorData);

  return (
    <div>
      <div
        className="main-container-booking"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div id="container">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between">
              <div className="w-1/2">
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                />
              </div>
              <div className="w-1/3">
                <p>Phone Number</p>
                <input
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your Phone number"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="w-1/5">
                <p>Age</p>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your Age"
                />
              </div>
              <div className="w-1/3">
                <p>City</p>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your City name"
                />
              </div>
              <div className="w-1/3">
                <p>Company</p>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your Company name"
                />
              </div>
            </div>
            <div className="w-full">
              <p>Chief Complaints</p>
              <textarea
                id="complaints"
                name="complaints"
                value={formData.complaints}
                onChange={handleChange}
                rows="5"
                cols="100%"
                className="w-full rounded-xl px-2 py-1"
                placeholder="Help us choose the right physio for you What is the intensity of
              your pain? How long have you been experiencing the problem"
              ></textarea>
            </div>
            {formData.age > 40 && (
              <div className="w-1/2 mt-1">
                <p>Any previous experience with physiotherapy</p>
                <div className="checkbox-button">
                  <label htmlFor="previousExperienceYes">Yes</label>
                  <input
                    type="checkbox"
                    id="previousExperienceYes"
                    name="previousExperience"
                    value="Yes"
                    checked={formData.previousExperience === "Yes"}
                    onChange={handleChange}
                    style={{ width: "20px", margin: "0.4rem" }}
                  />
                </div>
                <div className="checkbox-button">
                  <label htmlFor="previousExperienceNo">No</label>
                  <input
                    type="checkbox"
                    id="previousExperienceNo"
                    name="previousExperience"
                    value="No"
                    checked={formData.previousExperience === "No"}
                    onChange={handleChange}
                    style={{ width: "20px", margin: "0.4rem" }}
                  />
                </div>
              </div>
            )}

            <input className="bg-amber-400" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div className="Doctors  " style={{ zIndex: "-10" }}>
        {doctorData?.map((doctor) => (
          <div key={doctor._id} className="doctor-card  " data-aos="fade-up">
            <h1>{doctor.Name}</h1>
            <div className="doctor-info">
              <img src={doctor.Image} alt="" className="doctor-image" />
              <p>{doctor.About}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingForm;
