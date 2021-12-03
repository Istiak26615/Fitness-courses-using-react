import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
const HomeService = () => {
    const[services, setServices]=useState([])
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data.splice(4)))
    },[])
    return (
        <div>
            <div className="services-container home-container ">
            <div>
        <h1 className="ourservice mt-3">Our Services</h1>
      </div> 
      <div>  
        <div data-aos="fade-down" className="row justify-content-center">
            {
                services.map(service=><Service key={service.id} service={service}></Service>)
            }
        </div>
        </div> 
        </div>
        </div>
    );
};

export default HomeService;
