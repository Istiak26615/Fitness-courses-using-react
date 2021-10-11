import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MenuBar from '../Menubar/Menubar';
import Service from '../Service/Service';

const Services = () => {
    const[services, setServices]=useState([])
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className=" container">
                  
        <div className="row">       
            {
                services.map(service=><Service key={service.id} service={service}></Service>)
            }
        </div>
        </div>
    );
};

export default Services;