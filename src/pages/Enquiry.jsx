import React, { useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faLaptopCode,
  faBuilding,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    businessType: "",
    preferredTime: "",
    address: "",
  });
  const nav=useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



const handleSubmit = async (e) => {
  e.preventDefault();
  // if not already declared at top

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/enquiry`,
      formData
    );

    console.log("Success:", response.data);
    alert("Enquiry submitted successfully!");

    setFormData({
      name: "",
      mobile: "",
      email: "",
      service: "",
      businessType: "",
      preferredTime: "",
      address: "",
    });

    setTimeout(() => {
      nav("/");
    }, 800); // small delay to ensure smooth navigation
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong!");
  }
};


  return (
    <div className="container py-5 ">
      <div className="container ">
        <h2 className="text-center font fw-bold mb-4">
          <FontAwesomeIcon
            icon={faCalendarCheck}
            className="me-2 text-success"
          />
          Book a Call / Enquiry
        </h2>

        <form onSubmit={handleSubmit} className="row g-3">
          {/* Name */}
          <div className="col-md-6">
            <label className="form-label fw-bold">
              <FontAwesomeIcon icon={faUser} className="me-2 highlight" />
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="form-control sharp-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mobile */}
          <div className="col-md-6">
            <label className="form-label fw-bold">
              <FontAwesomeIcon icon={faPhone} className="me-2 highlight" />
              Mobile:
            </label>
         <input
  type="tel"
  name="mobile"
  className="form-control sharp-input"
  maxLength={11} 
  value={formData.mobile}
  onChange={(e) => {
    // Remove all non-digit characters
    let value = e.target.value.replace(/\D/g, '');

    // Format: Add space after first 5 digits
    if (value.length > 5) {
      value = value.slice(0, 5) + ' ' + value.slice(5, 10);
    }

    // Prevent more than 10 digits total
    value = value.slice(0, 11); // includes space

    handleChange({ target: { name: 'mobile', value } });
  }}
  onKeyPress={(e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  }}
  required
/>


          </div>

          {/* Email */}
          <div className="col-md-6">
            <label className="form-label fw-bold">
              <FontAwesomeIcon icon={faEnvelope} className="me-2 highlight" />
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="form-control sharp-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Service */}
          <div className="col-md-6">
            <label className="form-label fw-bold">
              <FontAwesomeIcon icon={faLaptopCode} className="me-2 highlight" />
              Service:
            </label>
            <select
              name="service"
              className="form-select sharp-select"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" className="">
                Select a Service
              </option>
              <option>Web Development</option>
              <option>Digital Marketing</option>
              <option>Mobile App Development</option>

              <option>Billing & CRM</option>
              <option>Desktop Software</option>
            </select>
          </div>

          {/* Business Type */}
          <div className="col-md-6">
            <label className="form-label fw-bold">
              <FontAwesomeIcon icon={faBuilding} className="me-2 highlight" />
              Business Type:
            </label>
            <select
              name="businessType"
              className="form-select sharp-select"
              value={formData.businessType}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option>Startup</option>
              <option>Freelancer</option>
              <option>Agency</option>
              <option>Enterprise</option>
              <option>Individual</option>
            </select>
          </div>
          {/* Preferred Contact Time */}
          <div className="col-md-6">
            <label className="form-label fw-bold">
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className="me-2 highlight"
              />
              Preferred Contact Time:
            </label>
            <select
              name="preferredTime"
              className="form-select sharp-select"
              value={formData.preferredTime || ""}
              onChange={handleChange}
            >
              <option value="">Select Time</option>
              <option>Morning (9AM–12PM)</option>
              <option>Afternoon (12PM–4PM)</option>
              <option>Evening (4PM–8PM)</option>
            </select>
          </div>
          {/* Address */}
          <div className="col-12">
            <label className="form-label fw-bold">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="me-2 highlight"
              />
              Address:
            </label>
            <textarea
              name="address"
              rows="3"
              className="form-control sharp-textarea"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit */}
          <div className="col-12 text-center mt-4 ">
            <button
              type="submit"
              className="btn submit-btn px-4 py-2 fw-bold text-light"
            >
              Book a Call
            </button>
          </div>
        </form>

        {/* Custom Styling */}
        <style>{`
        .sharp-input,
        .sharp-select,
        .sharp-textarea {
          border-radius: 0 !important;
          border: 1px solid #ced4da;
          box-shadow: none;
          transition: border-color 0.3s ease-in-out;
        }

        .sharp-input:focus,
        .sharp-select:focus,
        .sharp-textarea:focus {
          border-color: #FF5C38;
          outline: none;
          box-shadow: none;
        }

        .form-label {
          font-weight: 600;
        }

        .submit-btn {
          background-color: #28a745;
          color: #fff;
          border-radius: 0;
          border: none;
          transition: all 0.3s ease-in-out;
        }

        .submit-btn:hover {
          background-color: #218838;
          transform: scale(1.03);
        }
      `}</style>
      </div>
    </div>
  );
};

export default Enquiry;
