import React from "react";
import logo from "../assets/ap.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer text-white pt-4 pb-3">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <img src={logo} alt="ajnexlogo" className="footerlogo m-1 p-1" />
            <p className="mx-3">
              Smart Digital solutions for your business — websites, billing,
              apps, and digital marketing.
            </p>
          </div>

          {/* Quick Links */}
      <div className="col-12 col-md-4 mb-3">
  <h6 className="fw-semibold text-center text-md-start">Quick Links</h6>
  <ul className="list-unstyled d-flex flex-column align-items-center align-items-md-start gap-2 p-0 m-0">
    <li
      className="text-white text-decoration-none"
      onClick={() => navigate("/service")}
      style={{ cursor: "pointer" }}
    >
      Services
    </li>
    <li
      className="text-white text-decoration-none"
      onClick={() => navigate("/about")}
      style={{ cursor: "pointer" }}
    >
      About
    </li>
    <li
      className="text-white text-decoration-none"
      onClick={() => navigate("/enquiry")}
      style={{ cursor: "pointer" }}
    >
      Contact
    </li>
  </ul>
</div>



          {/* Contact & Social */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-semibold">Connect With Us</h6>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>info@ajnex.com
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>+91 88700 61820
            </p>
            <div>
              <a
                href="https://facebook.com/ajnex.in"
                className="text-white me-3 fs-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://instagram.com/ajnex.in"
                className="text-white me-3 fs-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ajnex.in"
                className="text-white me-3 fs-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://wa.me/918870061820"
                className="text-white fs-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-light" />
      <p className="text-center mb-0">
  &copy; {new Date().getFullYear()} AjNex Digital Solution. Built with 🧡 in India — <a href="https://ajnex.in" className="text-white text-decoration-none">ajnex.in</a>
</p>


      </div>
    </footer>
  );
};

export default Footer;
