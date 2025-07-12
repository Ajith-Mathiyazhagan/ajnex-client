import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../assets/about.png';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faBullseye,
  faCogs,
  faLaptopCode,
  faBullhorn,
  faHandshake,
  
  faCubes
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='bgabout mt-1'>
      <div className="container py-2 mt-3 ">
      <h3 className='font fw-bold text-center abouttext' data-aos="fade-down">
  <FontAwesomeIcon icon={faCubes} className=" highlight me-2" />
  About Ajnex
</h3>


<p className='font fw-bold text-center' data-aos="fade-up">
  <FontAwesomeIcon  className="text-primary me-2" />
  Ajnex provides reliable digital tools and services that simplify business operations and boost growth.
</p>


        <div className="row align-items-center p-4">
          {/* Left Content */}
          <div className="col-12 col-md-6 text-start" data-aos="fade-right">
            <h2 className='font fw-bold'>
              <FontAwesomeIcon icon={faEye} className="text-primary me-2" />
              Our Vision:
            </h2>
            <p className='font fw-bold'>
              “To empower small and medium businesses across India with simple, scalable, and smart technology solutions — 
              making digital tools accessible to every entrepreneur.”
            </p>

            <h2 className='font fw-bold mt-4'>
              <FontAwesomeIcon icon={faBullseye} className="text-success me-2" />
              Mission:
            </h2>
            <p className='font fw-bold'>
              <FontAwesomeIcon icon={faCogs} className="highlight me-2" />
              Deliver affordable, reliable, and user-friendly software solutions.<br />
              <FontAwesomeIcon icon={faLaptopCode} className="highlight me-2" />
              Provide customized websites, billing tools, and CRM systems.<br />
              <FontAwesomeIcon icon={faBullhorn} className="highlight me-2" />
              Offer complete digital marketing solutions to boost client visibility.<br />
              <FontAwesomeIcon icon={faHandshake} className="highlight me-2" />
              Build long-term client relationships through quality support and trust.
            </p>
          </div>

          {/* Right Image */}
          <div className="col-12 col-md-6 text-center" data-aos="zoom-in">
            <img
              src={img}
              alt="AjNex digital services - app development, data analytics, business growth, marketing illustration"
              className="img-fluid img-zoom rounded"
            />
          </div>
        </div>

        {/* Hover Zoom Effect */}
        <style>{`
          .img-zoom {
            transition: transform 0.5s ease;
          }
          .img-zoom:hover {
            transform: scale(1.05);
          }
        `}</style>
      </div>
    </div>
  );
};

export default About;
