import React from 'react';
import Banner from './Banner';
import BussinSummery from './BussinSummery';
import Cartshow from './Cartshow';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BussinSummery></BussinSummery>
            <Cartshow></Cartshow>
            
        </div>
    );
};

export default Home;