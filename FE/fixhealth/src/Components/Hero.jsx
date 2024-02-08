import React from 'react'
import HeroImage from "../../images/pngimg.com - doctor_PNG16026.png";
import "../Styles/Hero.css"
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/booking")
  }
  const doctorData = [
    {
      Image:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=1920&q=75",
      Comment:
        "Your assessment method is so good & patient support resolves issues promptly",
      Name: "Nishith Patel",
      Age: 66,
      Occupation: "Business Owner",
      Rating: 5,
    },
    {
      Image:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=1920&q=75",
      Comment: "Impressive service! Your team's dedication is commendable.",
      Name: "Sara Johnson",
      Age: 45,
      Occupation: "Doctor",
      Rating: 4,
    },
    {
      Image:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=1920&q=75",
      Comment: "Outstanding experience! Highly recommend your services.",
      Name: "Michael Smith",
      Age: 55,
      Occupation: "Engineer",
      Rating: 5,
    },
    {
      Image:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=1920&q=75",
      Comment: "Exceptional quality of care provided. Thank you!",
      Name: "Emily Brown",
      Age: 34,
      Occupation: "Nurse",
      Rating: 5,
    },
    {
      Image:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=1920&q=75",
      Comment: "Great service! Very satisfied with the outcome.",
      Name: "David Wilson",
      Age: 40,
      Occupation: "Teacher",
      Rating: 4,
    },
    {
      Image:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=1920&q=75",
      Comment: "Efficient and professional! Keep up the good work.",
      Name: "Jessica Lee",
      Age: 28,
      Occupation: "Software Developer",
      Rating: 4,
    },
    {
      Image:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=1920&q=75",
      Comment:
        "Very impressed with the level of professionalism. Highly recommended!",
      Name: "Daniel Miller",
      Age: 50,
      Occupation: "Accountant",
      Rating: 5,
    },
    {
      Image:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=1920&q=75",
      Comment: "Excellent service! Will definitely use again in the future.",
      Name: "Sophia Taylor",
      Age: 38,
      Occupation: "Marketing Manager",
      Rating: 5,
    },
    {
      Image:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=1920&q=75",
      Comment: "Prompt and effective service. Thank you!",
      Name: "Andrew Clark",
      Age: 48,
      Occupation: "Lawyer",
      Rating: 4,
    },
    {
      Image:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=1920&q=75",
      Comment: "Very happy with the results. Professional and friendly staff.",
      Name: "Olivia Martinez",
      Age: 42,
      Occupation: "Dentist",
      Rating: 5,
    },
  ];

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
      <div className="expert" data-aos="flip-left">
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
        <div
          className="Doctors"
          data-aos="fade-up-right"
          style={{ zIndex: "-10" }}
        >
          {doctorData?.map((e) => (
            <div key={e} data-aos="fade-up" className="testimonial-card">
              <h1>{e.Name}</h1>
              <div className="card-content">
                <img src={e.Image} alt="" />
                <p>{e.Comment}</p>
                <div className="flex justify-between w-full">
                  <h3>
                    {e.Age}, <samp>{e.Occupation}</samp>
                  </h3>
                  <div className="rating">
                    {[...Array(e.Rating)].map((_, i) => (
                      <span key={i} className="star">
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default Hero
