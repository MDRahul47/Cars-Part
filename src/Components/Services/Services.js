import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Services.css';

const Services = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('Fakedata.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="container">

       
        <div className="carts">
            

            {
                users?.slice(0, 12).map(user => <Cart
                    key={user._id}
                    user={user}

                ></Cart>)
            }
        </div>
        
        </div>
    );
};
export default Services;