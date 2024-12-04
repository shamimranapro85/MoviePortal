import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allmovies"}>All Movies</NavLink>
      </li>
      <li>
        <NavLink to={"/addmovie"}>Add Movie</NavLink>
      </li>
      <li>
        <NavLink to={"/myfav"}>My Favorites</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           {navItems}
          </ul>
        </div>
        <NavLink
          to="/"
          className=" normal-case flex items-center justify-center text-xl"
        >
          <img src="./favicon.ico" className="w-12" alt="" /> Movie Portal
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navItems}
        </ul>
      </div>
      <div className="navbar-end">
     
          <NavLink className={"btn ml-1"} to={"/auth/login"}>Login</NavLink>
  
       
          <NavLink className={"btn ml-1"} to={"/auth/register"}>Register</NavLink>
     
      </div>
    </div>
  );
}
