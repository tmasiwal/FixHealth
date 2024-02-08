import React from 'react'
import HeroImage from "../../images/pngimg.com - doctor_PNG16026.png";
import "../Styles/Hero.css"
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/booking")
  }
  return (
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
  );
}

export default Hero
