import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="bg-hero min-vh-100 min-vw-100">
        <div className="bg-mix">
          <div className="bg-yellow"></div>
          <div className="bg-orange"></div>
          <div className="bg-light-blue"></div>
          <div className="bg-dark-blue"></div>
          <div className="bg-red"></div>
        </div>

        <div className="wrap-deprecated text-white">
          <div className="container">
            <div className="wrap-heading d-flex">
              <i class="fas fa-exclamation-triangle"></i>
              <p>Your browser Internet Explorer 11 is deprecated</p>
            </div>
            <p>
              Modern browsers protect your device from viruses and support new
              technologies.
            </p>
            <p>
              That’s why we decided to stop supporting your current browser or
              your browser version. To access our website, please download one
              of the browsers below.
            </p>
            <button type="button" className="btn-browser text-white">
              How do I update my browser?
            </button>
          </div>
        </div>

        <div className="wrap-download container">
          <div className="wrap-google d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <i className="fab fa-chrome text-white mr-3"></i>
              <div className="heading-version">
                <h2 className="text-white mb-1">Google Chrome</h2>
                <p className="text-white mb-0">Version 40+</p>
              </div>
            </div>
            <button className="icon-download fas fa-download text-white"></button>
          </div>
          <div className="wrap-google d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <i className="fab fa-firefox-browser text-white mr-3"></i>
              <div className="heading-version">
                <h2 className="text-white mb-1">Mozilla Firefox</h2>
                <p className="text-white mb-0">Version 40+</p>
              </div>
            </div>
            <button className="icon-download fas fa-download text-white"></button>
          </div>
          <div className="wrap-google d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <i className="fab fa-edge text-white mr-3"></i>
              <div className="heading-version">
                <h2 className="text-white mb-1">MICROSOFT EDGE</h2>
                <p className="text-white mb-0">Version 40+</p>
              </div>
            </div>
            <button className="icon-download fas fa-download text-white"></button>
          </div>
          <div className="wrap-google d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <i className="fab fa-safari text-white mr-3"></i>
              <div className="heading-version">
                <h2 className="text-white mb-1">APPLE SAFARI</h2>
                <p className="text-white mb-0">Version 40+</p>
              </div>
            </div>
            <button className="icon-download fas fa-download text-white"></button>
          </div>
          <div className="wrap-google d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <i className="fab fa-opera text-white mr-3"></i>
              <div className="heading-version">
                <h2 className="text-white mb-1">OPERA</h2>
                <p className="text-white mb-0">Version 40+</p>
              </div>
            </div>
            <button className="icon-download fas fa-download text-white"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
