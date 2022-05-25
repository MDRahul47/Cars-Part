import React from 'react';
import { Link } from 'react-router-dom';

const ManageCart = ({user,index}) => {
    const { name} = user;
    return (


        <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td></td>
        <td><button class="btn btn-xs">Delete</button></td>
      </tr>

    );
};


export default ManageCart;