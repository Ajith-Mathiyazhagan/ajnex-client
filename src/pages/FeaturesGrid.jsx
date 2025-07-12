import React from 'react';

const FeaturesGrid = () => {
  return (
    <div className="container my-4">
      <div className="row text-center">
        {/* Performance Column */}
        <div className="col-md-6 mb-4">
          <h5 className="fw-bold text-primary">Performance</h5>
          <ul className="list-unstyled">
            <li><i className="bi bi-speedometer2 me-2"></i>Low-latency</li>
            <li><i className="bi bi-arrows-expand me-2"></i>Scalable</li>
            <li><i className="bi bi-globe2 me-2"></i>SEO Optimized</li>
          </ul>
        </div>

        {/* Value Column */}
        <div className="col-md-6 mb-4">
          <h5 className="fw-bold text-success">Value</h5>
          <ul className="list-unstyled">
            <li><i className="bi bi-shield-lock me-2"></i>Secure</li>
            <li><i className="bi bi-sliders me-2"></i>Customizable</li>
            <li><i className="bi bi-headset me-2"></i>Ongoing Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;