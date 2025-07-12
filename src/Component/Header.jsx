import React from 'react';
import logo from '../assets/ap.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCogs, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='container-fluied header'>
      <div className='container '>
        <nav className="navbar navbar-expand-lg">
          <img className='logo' alt='logo' src={logo} />
          <button
            className="navbar-toggler bg-light mx-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} className="text-dark fs-4" />
          </button>

          <div className="collapse navbar-collapse mx-3" id="navbarNav">
            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item">
                <span className="nav-link text-white curser" onClick={() => {
  navigate('/');
  document.querySelector('.navbar-collapse')?.classList.remove('show');
}}
>
                  <FontAwesomeIcon icon={faHome} className="me-1 highlight" /> Home
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white curser" onClick={() => {
  navigate('/about');
  document.querySelector('.navbar-collapse')?.classList.remove('show');
}}
>
                  <FontAwesomeIcon icon={faUser} className="me-1 highlight" /> About
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white curser" onClick={() => {
  navigate('/service');
  document.querySelector('.navbar-collapse')?.classList.remove('show');
}}
>
                  <FontAwesomeIcon icon={faCogs} className="me-1 highlight" /> Services
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white curser" onClick={() => {
  navigate('/enquiry');
  document.querySelector('.navbar-collapse')?.classList.remove('show');
}}
>
                  <FontAwesomeIcon icon={faEnvelope} className="me-1 highlight" /> Contact
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
