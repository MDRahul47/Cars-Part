import React from 'react';
import './LastSection.css';


const LastSection = () => {
    return (
        
        <div class="hero  mt-48 min-h-screen" style={{
            backgroundImage: "url(" + "https://i.pinimg.com/736x/c6/e4/7c/c6e47ce28b1054833ba33fa674c7ce47--dream-garage-car-garage.jpg" + ")"
            }}>
 <div class="hero bgblur min-h-screen">
  <div class="hero-content flex-col gap-x-16 lg:flex-row-reverse">
    <div class="text-center lg:text-left mx-16">
      <h1 class="text-5xl text-white font-bold">Buy Our Premium Package</h1>
      <p class="py-6 text-white font-bold ">Our Package is limited so you must have to chacke it out as soon as possivali. It have so  maney demand thats why we have not enough musch stock. You can also order it with extra money ..we are looking forward to you...</p>
      <button className='btn btn-primary'>Explore More</button>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Message</span>
          </label>
          <input type="text" placeholder="Message" class="input input-bordered" />
          
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default LastSection;