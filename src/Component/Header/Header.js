import React from 'react';
import Menubar from '../Menubar/Menubar';
import AOS from 'aos';
import 'aos/dist/aos.css'

import './Header.css'

const Header = () => {
  AOS.init();
    return (
        <div className="header-container ">
      <div className="">
        <div className="row d-flex header-img align-items-center justify-content-center">
          <div data-aos="fade-up" className="col-md-6">
            <div data-aos="fade-up">
            <h1 className="title">
              Train Smart <br /> Not Hard
            </h1>
            <p className="text-white text-center mt-3">
              Join us to reach your fitness goals in a short period of time in a healthy way
            </p>
            </div>
            
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
    );
};

export default Header;