import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slider.css';



export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    
    return (
      <div className="dp mt-40">
        <h2 className="text-center font-bold  text-red-500"> Top Collection </h2>
        <Slider className="text-center  " {...settings}>
          <div>
          <img className="pho" src="https://www.mechanicalbooster.com/wp-content/uploads/2017/11/types-of-gearbox.jpg" alt="" />
          <h3>Gair Box</h3>
          <h1>Price: 10900$ </h1>
          <div className="line"></div>
          </div>
          <div>
          <img className="pho" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShv3swm_aCuapqe4xI89W5nQZUOmPLPaOkbG5kNEfQALj4o0Ndii-4wpuA7U-sppIqjg0&usqp=CAU" alt="" />
          <h3 className="text-center">Glass</h3>
          <h1>Price: 450$</h1>
          <div className="line"></div>
          
          </div>
          <div>
          <img className="pho" src="https://sc04.alicdn.com/kf/H30b7f66dae91471bbff8d80caff5bd1c4.jpg" alt="" />
          <h3 className="text-center">Bumper</h3>
          <h1>Price: 100$</h1>
          <div className="line"></div>
          </div>
          <div>
          <img className="pho" src="https://5.imimg.com/data5/GB/IY/MY-16425244/wiper-blade-500x500.jpg" alt="" />
          <h3 className="text-center">wiper</h3>
          <h1>Price: 800$ </h1>
          <div className="line"></div>
          </div>
          <div>
          <img className="pho" src="https://images.cdn.circlesix.co/image/2/900/600/5/uploads/posts/2018/07/26fe22f651c0d8ddf8706a54b5580e93.jpg" alt="" />
          <h3>Break</h3>
          <h1>Price: 2700$ </h1>
          <div className="line"></div>
          </div>
          <div>
          <img className="pho" src="https://cdn.shopify.com/s/files/1/0519/4441/files/HP11.6-2_1600x.jpg?v=1584023361" alt="" />
          <h3>Suspension</h3>
          <h1>Price:2700$ </h1>
          <div className="line"></div>
          </div>
          <div>
          <img className="pho" src="https://res.cloudinary.com/hvwckxprc/image/fetch/c_limit,q_auto:good,w_1200/https://d2bythind2nctn.cloudfront.net/media/uk/cms/exhaust-back-box_dd53058360.png" alt="" />
          <h3 className="text-center">Exhaust</h3>
          <h1>Price: 300$</h1>
          <div className="line"></div>
          </div>
          <div>
          <img className="pho" src="https://images.maxi-cosi.com/dorel-public-storage-prod/catalog/product/cache/655f0b719d7fda71d9d06b11a51a9714/8/0/8037510110_2020_maxicosi_carseat_toddlercarseat_nomad_grey_authenticgrey_3qrtleft.png" alt="" />
          <h3  className="text-center ">set</h3>
          <h1 >Price:3900$ </h1>
          <div className="line"></div>
          </div>
        </Slider>
      </div>
    );
  }
}