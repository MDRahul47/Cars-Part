import React from 'react';
import AutoPlay from '../ImgSlider/Slider';
import MyrevirewMap from '../MyrevirewMap/MyrevirewMap';
import Banner from './Banner';
import BussinSummery from './BussinSummery';
import Cartshow from './Cartshow';
import './Home.css';
import LastSection from './LastSection/LastSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BussinSummery></BussinSummery>
            <Cartshow></Cartshow>
            <AutoPlay></AutoPlay>
            <MyrevirewMap></MyrevirewMap>
            <LastSection></LastSection>
        </div>
    );
};

export default Home;