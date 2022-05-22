import React from 'react';
import './BussinSummary.css';

const BussinSummery = () => {
    return (
      <div>
          <h1 className=' mt-24  font-bold text-center text-3xl text-red-500  '>The Business Summary</h1>
            <div class="stats stats-vertical  lg:stats-horizontal middle shadow-lg text-black  bg-primary ">
            
            <div class="stat">
    
              <div class="stat-title font-bold" >Customers</div>
              <div class="stat-value font-bold">31K</div>
              <div class="stat-desc font-bold">Jan 1st - Feb 1st</div>
            </div>
            
            <div class="stat">
              <div class="stat-title font-bold">Reviews</div>
              <div class="stat-value font-bold">4,200</div>
              <div class="stat-desc font-bold">↗︎ 400 (22%)</div>
            </div>
            
            <div class="stat">
              <div class="stat-title font-bold">Annual Revenue</div>
              <div class="stat-value font-bold">9,6500</div>
              <div class="stat-desc font-bold">↘︎ 90 (14%)</div>
            </div>
            <div class="stat">
              <div class="stat-title font-bold">Parts</div>
              <div class="stat-value font-bold">9,6500</div>
              <div class="stat-desc font-bold">↘︎ 90 (14%)</div>
            </div>
            
          </div>
      </div>
    );
};

export default BussinSummery;
