import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Cartshow.css';

const Cartshow = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="container">

       
        <div className="carts">
            

            {
                users?.slice(0, 6).map(user => <Cart
                    key={user._id}
                    user={user}

                ></Cart>)
            }
        </div>
        
        </div>
    );
};

export default Cartshow;