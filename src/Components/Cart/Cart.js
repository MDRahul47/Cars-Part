import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ user }) => {

    const { name, price, _id, img,Mquantity,Aquantity,description } = user;
    return (
        <div className="card card-compact w-85 mid bg-gray-200  shadow-2xl">
  <figure><img className='photo' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold">{name}</h2>
    <p className='text-xl'><span className='font-bold text-xl'>Price: </span> {price} $</p>
    <p className='text-xl'><span className='font-bold text-xl'>Minimum Order Quantity: </span> {Mquantity}</p>
    <p className='text-xl'> <span className='font-bold text-xl'>Available Quantity: </span>{Aquantity}</p>
    <p className='text-xl'>  <span className='font-bold '>Description : </span><span className=''>{description}</span> </p>
    <div className="card-actions justify-end">
    <Link to={`/puches/${_id}`}>
            <button className="btn btn-primary text-white">Purchase Now</button>
          </Link>
    </div>
  </div>
</div>
    );
};

export default Cart;