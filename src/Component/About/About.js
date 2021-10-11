import React from 'react';
import MenuBar from '../Menubar/Menubar';
import './About.css'

const About = () => {
    return (
        <div>
        <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-5 about">
                <img src="https://st2.depositphotos.com/3283693/11242/i/600/depositphotos_112426946-stock-photo-sprinter-leaving-on-the-running.jpg" alt="" />
            </div>
            <div className="col-md-5 about-description">
                  <h2>About Us</h2>
                  <p>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!y</p>
            </div>
        </div>
        </div>
        </div>
    
    );
};

export default About;