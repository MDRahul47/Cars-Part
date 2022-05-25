import React, { useEffect, useState } from 'react';
import ManageCart from './ManageCart';

const ManageParts = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (

<div>
<h2 className='text-center text-2xl text-primary text-bold mb-5'>All Parts {users?.length}</h2>
<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th></th>
        <th>Admin</th>
        <th>Section</th>
      </tr>
    </thead>
    <tbody>
      
{
    users?.map((user,index) => <ManageCart
        key={user._id}
        user={user}
        index={index}

    ></ManageCart>)
}
    </tbody>
  </table>
</div>
</div>

);
};
export default ManageParts;



