import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="left-container text-start">
                  <h1>No Limits Fitness</h1>
                  
                  <p className="mt-4 ">
                    <small>
                      We are concerned about health, we will help you to reach your fitness goal. We have the best trainers to make you reach to your goal in a healthy way.
                    </small>
                  </p>
                  <p>
                        <small>Address:560 Dhaka, Bangladesh, GZ 10038,
                        <br /> 102 1st Avenue, Gazipur, 53 No Ward</small>
                      </p>
                      <small>Call: +015 678 8292 44 </small>
  
                  <p className="mt-5">
                    <small>Istiak Shamim Shishir© All rights reserved.</small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                {/* <div className="footer-menu-container">
                  <ul>
                    <li className="footer-menu">Home</li>
                    <li className="footer-menu">About Us</li>
                    <li className="footer-menu">Services</li>
                    <li className="footer-menu">Contact us</li>
                  </ul>
                </div> */}
              </div>
              <div className="col-md-5">
                <div className="right-footer-container">
                  <h2>Have any Question?</h2>
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <br/>
                  <input
                    className="footer-input mt-2"
                    type="text"
                    placeholder="Enter Question"
                  /><br/>
                  <button className="mt-2 about-btn">Submit</button>
                  
                  <div className="map d-flex align-items-center justify-content-center">
                    <div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;