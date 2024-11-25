import React from "react";
import { Link } from "react-router-dom"; // Import Link for React Router

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-option">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__links">
              <Link to="/">
                <i className="fa fa-home"></i> Home
              </Link>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
