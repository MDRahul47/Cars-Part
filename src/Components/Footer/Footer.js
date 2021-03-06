import React from 'react';

const Footer = () => {
    return (
        <div className='max-h-100 p-10 mt-40 bg-base-300'>
            <footer className="footer max-h-100 p-10 bg-base-300  text-base-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="htmlForm-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative mr-4">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-40 pr-19" /> 
        <button className="btn btn-primary absolute top-0 right-21 rounded-2-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;