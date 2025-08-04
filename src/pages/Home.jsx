import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import landingimg from '../assets/on.png';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faMobileAlt, faBullhorn, faHandshake } from '@fortawesome/free-solid-svg-icons';
import {  useNavigate } from 'react-router-dom';
import About from './About';
import Services from './Service';
import WhyChooseUs from './WhyChooseUs';

 

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 const nav=useNavigate()
  return (
    <div className='bg  '>
      <div className="container">
        <div className="row align-items-center p-4">

          {/* Left Side Content */}
          <div className="col-12 col-md-6 my-4 text-center" data-aos="fade-right">
            {/* <h1 className="font1 fw-bold">
              <FontAwesomeIcon icon={faRocket} className="text-primary me-2" />
              <i>Transforming ideas into digital success<br />with powerful apps & marketing solutions.</i>
            </h1> */}
            <h1 className="font fw-bold text-center">
  <FontAwesomeIcon icon={faRocket} className="text-success me-2" />
  <i>Empowering Growth Through<br />Smart Apps &<h1 className='font fw-bold highlight'>Digital Innovation</h1> </i>
</h1>

            <p className="subtext text-muted mt-3">
              <FontAwesomeIcon icon={faMobileAlt} className="text-info me-2" />
              App Development &nbsp; 
              <FontAwesomeIcon icon={faBullhorn} className="text-danger me-2" />
              Digital Marketing &nbsp; 
              <FontAwesomeIcon icon={faHandshake} className="text-success me-2" />
              Business Growth Support
            </p>


            <div>
              <button onClick={()=>nav("/enquiry")}
                className='btn btncolor  btn1 fw-bold  mt-1'
                data-aos="zoom-in"
               >
                <p className='my-1 '>Get in Touch</p>
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-12 col-md-6 text-end" data-aos="fade-left">
            <img
              src={landingimg}
              alt="AjNex Technologies logo - Digital Marketing and App Development Company"
              className="img-fluid img-zoom "
            />
            <p className="text-muted mt-1 text-center">
  From concept to launch — we build scalable tech, modern marketing, and complete business tools.
</p>
          </div>
        </div>

        {/* Custom CSS */}
        <style>{`
          .img-zoom {
            transition: transform 0.5s ease;
          }
          .img-zoom:hover {
            transform: scale(1.05);
          }
          .btncolor:hover {
            transform: scale(1.05);
            transition: all 0.3s ease-in-out;
          }
            
          

        `}</style>
      </div>
      <About/>
      <Services/>
      <WhyChooseUs/>
      
    </div>
  );
};

export default Home;
