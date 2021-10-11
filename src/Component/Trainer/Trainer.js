import React from 'react';
import MenuBar from '../Menubar/Menubar';
import './Trainer.css'

const Trainer = () => {
    return (
        <div>
            
        <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-7 trainer">
                <img src="https://uploads-ssl.webflow.com/5ee76aa38c8a966d9d225157/5efef20f8d5f7c78cf723a6c_Andrew_CobraTate-0979.jpg" alt="" />
            </div>
            <div className="col-md-3 trainer-description">
                  <h2>Andrew Tate</h2>
                  <p>Emory Andrew Tate III (born December 1, 1986) is a British-American kickboxer, combat sports and businessman. As a kickboxer, Tate is a 3-time ISKA world champion and Enfusion champion. Born in Washington, DC, he fought out of Luton, England, until his retirement. Tate made his return in February 2020 at KO Masters 7 in Bucharest, Romania, where he currently resides.[3] Tate's reported net worth is $15 million USD.</p>
            </div>
        </div>
        </div>
        </div>
    
    );
};

export default Trainer;