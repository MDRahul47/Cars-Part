import React, { useEffect, useState } from 'react';
import Allorderscard from './Allorderscard';

const Allorders = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (


        <div>
        <h2 className='text-center text-2xl text-primary text-bold mb-5'>Make Admin {users?.length}</h2>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th className='text-center'>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
{
    users?.map((user,index) => <Allorderscard
        key={user._id}
        user={user}
        index={index}

    ></Allorderscard>)
}
            </tbody>
          </table>
        </div>
      </div>

    );
};
export default Allorders;
