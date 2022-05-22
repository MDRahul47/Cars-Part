import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../Firebase.init";


const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  return (
    <> 
    <div className="navbar bg-base-300">
    <a className="btn btn-ghost mx-auto normal-case text-xl">Rahul Bhuayin</a>
  <div className="navbar-end">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-30">
      <li><NavLink to='/home'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/services'>Services</NavLink></li>
      <li><NavLink to='/blogs'>Blogs</NavLink></li>

      <li>{user ? <button onClick={logout} class="btn btn-ghost">Sign Out</button> :<NavLink to='/login'>Login</NavLink>}</li>


      </ul>
    </div>
  </div>
  <div className="navbar-center  hidden lg:flex">
  <ul className="menu menu-horizontal font-bold p-2 items-center ">
      <li  className="mr-3"><NavLink to='/home'>Home</NavLink></li>
      <li className="mr-3"><NavLink to='/about'>About</NavLink></li>
      <li className="mr-3"><NavLink to='/services'>Services</NavLink></li>
      <li className="mr-3"><NavLink to='/blogs'>Blogs</NavLink></li>
      <li>{user ? <button onClick={logout} class="btn btn-ghost">Sign Out</button> :<NavLink to='/login'>Login</NavLink>}</li>

    </ul>
  </div>
  <label tabIndex="0" className="btn btn-ghost btn-circle avatar mx-auto">
        <div className="w-10  rounded-full">
         
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
</div>
</>
  );
};

export default Navbar;
