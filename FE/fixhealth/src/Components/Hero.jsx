import React from 'react'
import HeroImage from "../../images/pngimg.com - doctor_PNG16026.png";
import "../Styles/Hero.css"
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/booking")
  }
  const doctorData=[1,11,111,1111]
  return (
    <div>
      <div className="hero-container">
        <div
          className="herodiv "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img className=" heroimg" src={HeroImage} alt="" />
        </div>
        <div className=" card">
          <button
            className="btn draw-border text-3xl"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            onClick={handleClick}
          >
            Start Your Recovery
          </button>
          <p></p>
        </div>
      </div>
      <div className='expert'>
        <h1
         
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          Meet Our Experts
        </h1>
        <h2>Experience the Benefits of Advanced Technology and Expert Care</h2>
      </div>
      {
        <div className="Doctors  " style={{ zIndex: "-10" }}>
          {doctorData?.map((e) => (
            <div key={e} className="doctor-card  " data-aos="fade-up">
              <h1>Dr. Emily Watson</h1>
              <div className="doctor-info">
                <img
                  src="https://media.gettyimages.com/id/1298800629/photo/portrait-of-confident-male-doctor-looking-at-camera.jpg?s=612x612&w=0&k=20&c=CB3h3a-0yUBgaZHhF2Kd5ibfDv25Qcjsca-ia5gIWUM="
                  alt=""
                  className="doctor-image"
                />
                <p>
                  Dr. Emily Watson is a board-certified cardiologist with over
                  15 years of experience in treating cardiovascular diseases.
                  She is dedicated to providing compassionate care and utilizing
                  the latest advancements in cardiology to improve patient
                  outcomes.
                </p>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default Hero
