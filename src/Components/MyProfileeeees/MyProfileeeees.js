import React from 'react';
import './myProfileeees.css';
import myselfe from './img/IMG_20220504_195053.jpg';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const MyProfileeeees = () => {
    return (
        <div className=''>

        <div className='flex point bg-slate-300 '>
            <div>
                <img className='h-96 pic ' src={myselfe} alt="" />
            </div>
            <div className=' font-bold  tex'>
                <h1 className='text-2xl'>MD: Rahul Bhuayin</h1>
                <h1 className='text-2xl'>Web Developer</h1> <br /> 


                <div className='icon flex mb-4 mt-4 '>
                    <BsFacebook className=" text-4xl"></BsFacebook> 
                    <FaInstagramSquare className="ml-4 text-4xl"></FaInstagramSquare>
                    <AiFillLinkedin className="ml-4 text-4xl"></AiFillLinkedin> 
                    <AiFillGithub className="ml-4 text-4xl"></AiFillGithub>
                </div>

                <div className='bg'></div>

                <div className='ml-50'>
                <p className='text-red-500 text-xl'>Skills</p>   
                <label> HTML <progress class="progress progress-secondary w-20" value="100" max="100"></progress>  <br /></label>
                <label> CSS  <progress class="progress progress-secondary w-20" value="100" max="100"></progress>  <br /></label>                    
                <label> JavaScript  <progress class="progress progress-secondary w-20" value="85" max="100"></progress>  <br /></label>                    
                <label> React <progress class="progress progress-secondary w-20" value="90" max="100"></progress>  <br /></label>                    
                </div>


            </div>
        </div>
        </div>

    );
};

export default MyProfileeeees;