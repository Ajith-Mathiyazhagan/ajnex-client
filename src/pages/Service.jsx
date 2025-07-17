import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faMobileAlt,
  faBullhorn,
  faFileInvoiceDollar,
  faDesktop,
  faTools
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: faCode,
    title: 'Web Development',
    description: 'Build responsive, SEO-optimized, and scalable websites tailored for your business.',
    tags: ['Portfolio', 'Booking Sites', 'E-Commerce', 'Responsive Design', 'SEO-ready']
  },
  {
    icon: faBullhorn,
    title: 'Digital Marketing',
    description: 'Boost online presence with targeted digital campaigns, SEO, and content strategies.',
    tags: ['SEO', 'Social Media', 'Email Campaigns', 'Lead Gen']
  },
  {
    icon: faMobileAlt,
    title: 'Mobile App Development',
    description: 'Develop high-performance Android and iOS apps with modern tech like React Native.',
    tags: ['React Native', 'Cross Platform', 'Admin Panel', 'Push Notifications']
  },
  {
    icon: faFileInvoiceDollar,
    title: 'Billing & CRM',
    description: 'Smart billing systems with customer tracking, sales analytics, and CRM integrations.',
    tags: ['POS', 'CRM Tools', 'Inventory', 'Reports']
  },
  {
    icon: faDesktop,
    title: 'Desktop Software',
    description: 'Powerful offline billing & business tools for retail, pharma, and wholesale sectors.',
    tags: ['Offline Billing', 'GST Invoices', 'Low Memory Usage']
  }
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const nav = useNavigate();

  return (
    <section className="">
      <div className="container mb-4 mt-4">
        <h2 className="text-center fw-bold mb-2">
          <FontAwesomeIcon icon={faTools} className="me-2 highlight" />
          Our Services
        </h2>
        <p className="text-center text-muted mb-5">
          Smart, Scalable, and Custom-Built for Your Business Growth
        </p>

        {/* Single loop – all services together */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {services.map((service, idx) => (
            <div className="col d-flex justify-content-center" key={idx} data-aos="fade-up">
              <div className="p-4 border rounded shadow h-100 bg-white text-center w-100" style={{ maxWidth: '400px' }}>
                <FontAwesomeIcon icon={service.icon} className="mb-3 text-primary" style={{ fontSize: '45px' }} />
                <h5 className="fw-bold highlight mb-2">{service.title}</h5>
                <p className="small">{service.description}</p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="badge bg-primary-subtle text-primary border border-primary rounded-pill px-3 py-1 small">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center mt-5" data-aos="zoom-in">
          <button onClick={() => nav("/enquiry")} className="btn btncolor btn1 fw-bold mt-1">
            Let’s Collaborate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
