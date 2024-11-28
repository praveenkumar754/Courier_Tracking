import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  // State to control the visibility of the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className='flex w-full px-4 py-10 mx-auto'>
        <div className='flex justify-between w-full items-center'>
          <div className='flex items-center'>
            <div>
              <img className='p-1 w-[100px] h-[100px]' src="C:\Users\office\Documents\Courier Project\courier\src\assets\about.jpg" alt="Logo" />
            </div>
            <div>
              <h1 className='text-black text-5xl italic p-0 md:text-3xl font-bold'>Express Delivery</h1>
            </div>
          </div>

          {/* Desktop and larger screen links */}
          <div className='flex gap-9 hidden md:flex'>
            <Link to={'/'} className='text-black text-xl hover:text-indigo-500 font-bold'>Home</Link>
            <Link to={'/about'} className='text-black text-xl hover:text-indigo-500 font-bold'>About us</Link>
            <Link to={'/blog'} className='text-black text-xl hover:text-indigo-500 font-bold'>Services</Link>
            <Link to={'/Tracking'} className='text-black text-xl hover:text-indigo-500 font-bold'>Contact us</Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black'>
              <i className={`fa-solid fa-${menuOpen ? 'xmark' : 'bars'} fa-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile menu - visible when menuOpen is true */}
        {menuOpen && (
          <div className='flex flex-col items-center md:hidden mt-4'>
            <Link to={'/'} className='text-black text-xl py-2 hover:text-indigo-500 font-bold'>Home</Link>
            <Link to={'/about'} className='text-black text-xl py-2 hover:text-indigo-500 font-bold'>About us</Link>
            <Link to={'/blog'} className='text-black text-xl py-2 hover:text-indigo-500 font-bold'>Services</Link>
            <Link to={'/Tracking'} className='text-black text-xl py-2 hover:text-indigo-500 font-bold'>Contact us</Link>
            {/* Social Media Icons for Mobile */}
            <div className='flex gap-4 mt-4'>
              <div className='hover:text-red-500'>
                <i className="fa-brands fa-instagram fa-2xl"></i>
              </div>
              <div className='hover:text-blue-500'>
                <i className="fa-brands fa-facebook-f fa-2xl"></i>
              </div>
              <div className='hover:text-green-500'>
                <i className="fa-brands fa-whatsapp fa-2xl"></i>
              </div>
            </div>
          </div>
        )}

        {/* Social Media Icons for Desktop */}
        <div className='flex gap-8 md:flex hidden'>
          <div className='hover:text-red-500'>
            <i className="fa-brands fa-instagram fa-2xl"></i>
          </div>
          <div className='hover:text-blue-500'>
            <i className="fa-brands fa-facebook-f fa-2xl"></i>
          </div>
          <div className='hover:text-green-500'>
            <i className="fa-brands fa-whatsapp fa-2xl"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
