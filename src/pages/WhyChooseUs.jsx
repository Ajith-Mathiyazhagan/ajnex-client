import React, { useEffect } from "react";
import AOS from "aos";
import CountUp from "react-countup";
import "aos/dist/aos.css";

const features = [
   {
    icon: "bi bi-phone",
    title: "Custom App Development",
    description:
      "We build powerful mobile and desktop applications tailored to your unique business workflows, making your operations smoother and smarter.",
  },
  {
    icon: "bi bi-megaphone",
    title: "Result-Driven Digital Marketing",
    description:
      "From SEO to social media, our marketing strategies are designed to boost your visibility, generate leads, and grow your brand online.",
  },
  {
    icon: "bi bi-window-stack",
    title: "All-in-One Digital Solutions",
    description:
      "AjNex delivers complete digital solutions — websites, billing systems, CRMs, and marketing — all integrated under one roof.",
  }


];

const stats = [
  { number: 25, label: "Clients Served" },
  { number: 19, label: "Projects Delivered" },
  { number: 6, label: "Team Members" },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" container-fluied">

    
    <div className="py-4 ">
      
      {/* // */}
      <div className="container text-center">
        <h2 className="fw-bold mb-3 text" data-aos="fade-down">
          Why Choose Ajnex?
        </h2>
        <p className="mb-3 text" data-aos="fade-up">
          At Ajnex, we blend innovation with simplicity to help Indian
          businesses go digital — quickly, affordably, and reliably.
        </p>
          <div className="container mb-4 w-75">
  <div className="" data-aos="fade-up">
    <div className="">
      <span className="text-muted font text-dark">
        <i className="bi bi-lightning-charge highlight text-warning me-2 fs-5"></i>
        High-Speed Delivery — Fast turnaround without compromising quality.
      </span>
    </div>
  </div>
</div>
    

        {/* Feature Cards */}
         
       

        <div className="row g-4 mb-3">
          {features.map((item, index) => (
            <div className="col-md-4" key={index} data-aos="zoom-in">
              <div className="p-4 rounded-4 shadow-sm bg-dark text-white h-100">
                <i
                  className={`${item.icon} mb-3`}
                  style={{ fontSize: "40px" }}
                ></i>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="small">{item.description}</p>
                <a href="/" className="text-info fw-bold small">
                  Learn more
                </a>
              </div>
              
            </div>
            
          ))}
   
        </div>


        {/* Stats Section with CountUp */}
        <div className="row g-4 justify-content-center">
          {stats.map((stat, index) => (
            <div
              className="col-4 col-md-2 text-center"
              key={index}
              data-aos="fade-up"
            >
              <h3 className="fw-bold text-dark">
                <CountUp end={stat.number} duration={2} />+
              </h3>
              <p className="text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom CSS */}
      <style>{`
       
        .shadow-sm:hover {
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
    </div>
  );
};

export default WhyChooseUs;
