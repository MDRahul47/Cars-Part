import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import Makeadminrow from '../Makeadminrow/Makeadminrow';


const Makeadmin = () => {
    const {
        data: users,
        isLoading,
        refetch,
      } = useQuery("users", () =>
        fetch("http://localhost:5000/user", {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((res) => res.json())
      );
      if (isLoading) {
        return <Loading />;
      }
      return (
        <div>
          <h2>Make Admin {users?.length}</h2>
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Admin</th>
                  
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => (
                  <Makeadminrow
                    key={user._id}
                    user={user}
                    index={index}
                    refetch={refetch}
                  ></Makeadminrow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
        }

export default Makeadmin;