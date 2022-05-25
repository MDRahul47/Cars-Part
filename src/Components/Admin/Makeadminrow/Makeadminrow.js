import React from 'react';

const Makeadminrow = ({user,index,refetch}) => {
    const { email, role } = user;
    const makeAdmin = () => {
      fetch(`http://localhost:5000/user/admin/${email}`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          alert("User added as Admin");
        });
    };
    return (
      <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>
          {role !== "admin" && (
            <button
              onClick={makeAdmin}
              class="btn btn-sm btn-secondary text-white"
            >
              Make Admin
            </button>
          )}
         
        </td>
      </tr>
    );
}
export default Makeadminrow;