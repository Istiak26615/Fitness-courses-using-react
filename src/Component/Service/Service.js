import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {
    const{name, trainer, description,image,price}=props.service
    return (
        
        <div data-aos="flip-left" className="col-md-3 service justify-content-center">
              <Card style={{ width: '18rem'}} className="fullcard" >
                <Card.Img variant="top" src={image} />
                <div class="middle">
                    <div class="text">${price}</div>
                </div>
                <Card.Body className="bg-dark text-white rounded-bottom text-start cardbody">
                    <Card.Title>Goal:{name}</Card.Title>
                    <Card.Text>
                        <span id="description">
                    <small>{description}</small></span><br/>
                    <small><b>Trainer: </b>{trainer}</small><br/>
                    </Card.Text>  
                </Card.Body>
                
                </Card>
            </div>
            
         
    );
};

export default Service;