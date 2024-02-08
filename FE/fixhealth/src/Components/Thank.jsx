import React, { useEffect } from "react";
import "../Styles/Thank.css"; 
import { useNavigate } from "react-router-dom";

const Thank = () => {
    const navigate =useNavigate()
    useEffect(()=>{
setTimeout(()=>{
    navigate("/")
},2000)

    },[])
  return (
    <div className="thank-container " data-aos="zoom-in">
      <h1>Thank You!</h1>
      <p>We appreciate you booking an appointment with us.</p>
      <p>Your appointment has been successfully scheduled.</p>
      <p>We look forward to seeing you soon!</p>
    </div>
  );
};

export default Thank;
