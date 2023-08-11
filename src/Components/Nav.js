import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

const Nav = ({ search, setSearch }) => {

  
  return (
    
    <div className="top-0 z-50 fixed w-full ">
      {/* next */}
   
      <div className="drawer drawer-end " >
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className=" flex-1 w-full navbar bg-red-700">
            
            <div className=" mx-2">
              Santo App</div>
           
            <form
            className="flex-1 px-2 mx-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="input input-bordered input-error max-w-xs "
              id="search"
              type="text"
              placeholder="search posts"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
            
           
            <div className="flex-none none hidden sm:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li >
                  <Link to="/" >Home</Link>
                  
                </li>
                <li >
                  <Link to="/post">Post</Link>
                </li>
                <li >
                  <Link to="/about">About</Link>
                  
                </li>
              </ul>
            </div>
            <div className="text-end sm:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
         
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-full h-max bg-base-200">
            {/* Sidebar content here */}
            <li className="">
                  <Link to="/" onClick={() => {
                    document.getElementById("my-drawer-3").checked = false;}} >Home</Link>
                </li>
                <li className="menu">
                  <Link to="/post" onClick={() => {
                    document.getElementById("my-drawer-3").checked = false;}}>Post</Link>
                </li>
                <li className="menu" onClick={() => {
                    document.getElementById("my-drawer-3").checked = false;}}>
                  <Link to="/about">About</Link>
                </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
