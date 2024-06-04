import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className="relative w-full h-20 flex items-center justify-between bg-white shadow-md">
        <div className="ml-8 mr-20">
          <h1 className="font-normal text-2xl text-black"><Link to="/">Logo</Link></h1>
        </div>
        <div className="mr-8 flex items-center space-x-8"> 
          <ul className="flex space-x-6">
            <li className="font-normal text-lg text-black"><Link to="/design">Design</Link></li>
            <li className="font-normal text-lg text-black"><Link to="/portfolio">Portfolio</Link></li>
            <li className="font-normal text-lg text-black"><Link to="/about">About</Link></li>
          </ul> 
        </div>
        <div className="mr-8">
            <div className="flex items-center justify-center bg-[#C66B6B] rounded-full w-32 h-12">
              <p className="font-montserrat font-semibold text-white text-sm"><Link to="/login">Sign Up</Link></p>
            </div>
          </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout;
