import React from 'react';
import bannerOne from './BannerImg/Banner-33.jpg';
import bannerTwo from './BannerImg/Banner-22.jpg';
import bannerThree from './BannerImg/Banner-1.jpg';


const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bannerOne} className="w-full"/>
          <div className="absolute flex justify-between transhtmlForm -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bannerTwo} className="w-full"/>  
          <div className="absolute flex justify-between transhtmlForm -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bannerThree} className="w-full"/> 
          <div className="absolute flex justify-between transhtmlForm -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        
      </div>
    );
};

export default Banner;