import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeService from '../HomeService/HomeService';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Header></Header>
       
        <div className=" header">
            
            <HomeService></HomeService>
        </div>
        </div>
    );
};

export default Home;