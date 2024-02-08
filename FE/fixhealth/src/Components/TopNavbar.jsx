import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/TopNavbar.css";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
const navigate=useNavigate()
const HandleClick=()=>{
  navigate("/booking")
}
  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`navbar w-full py-4 px-8 flex justify-between items-center rounded-2xl ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="navbarlogo h-14 flex justify-center items-center gap-2">
          <div className="flex  text-center">
            <div
              className=" bg-blue-100 py-1 px-2"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 className="text-bold">Fix</h2>
            </div>
            <div className="bg-amber-400 py-1 px-2">
              <h2>Health</h2>
            </div>
          </div>
        </div>

        <div className="navbarlinks flex justify-between items-center gap-8">
          <div className="flex justify-between items-center gap-8 py-4 px-6">
            <a href="/">Home</a>
            <a href="/">Services</a>
            <a href="/">About</a>
          </div>

          <button
            className="bg-amber-400"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            onClick={HandleClick}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
