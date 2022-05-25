import React from 'react';

const Allorderscard = ({ user, index }) => {
    const { userEmail} = user;
    return (


      <tr>
        <th>{index+1}</th>
        <td>{userEmail}</td>
        <td></td>
      </tr>


    );
};
export default Allorderscard;