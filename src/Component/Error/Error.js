import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div>
            <div id="error-page text-align-center">
         <div class="content">
            <h2 class="header">
               404
            </h2>
            <h4>
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </p>
            <div class="btns">
            <Link to="/home" className="items">
                  <h6>Return to Home</h6>
                </Link>
               
            </div>
         </div>
      </div>
        </div>
    );
};

export default Error;