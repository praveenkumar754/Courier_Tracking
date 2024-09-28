import React from 'react'
import { Link } from 'react-router-dom'
// import a from '../../assets/PropTypes.number,'
export default function Header() {
  return (
    <header>
    
      
       

    <nav className='flex  w-full px-4 py-10 mx-auto'>
        <div className='flex justify-between w-full items-center '>
            <div className='flex items-center '>
                <div>
                    <img className=' p-1 w-[100px] h-[100px]' src="src/assets/pngegg.png" alt="" srcset="" />
                </div>
                <div>
                    <h1 className='text-black text-5xl italic p-0 md:text-3xl font-bold'>Express Delivery</h1>
                </div>
            </div>
            <div className='flex gap-9'>
                <Link to={'/'}  className='text-black text-xl hover:text-indigo-500 font-bold'>Home</Link>
                <Link to={'/about'}  className='text-black text-xl hover:text-indigo-500 font-bold'>About us</Link>
                <Link to={'/blog'}  className='text-black text-xl hover:text-indigo-500 font-bold'>Services</Link>
                <Link to={'/Tracking'}  className='text-black text-xl hover:text-indigo-500 font-bold'>Tracking</Link>
            </div>
            <div className='flex gap-8 md:hidden'>
                <div className=' hover:text-red-500'>
                <i class="fa-brands fa-instagram fa-2xl"></i>
                </div>
                <div className=' hover:text-blue-500'>
                <i class="fa-brands fa-facebook-f fa-2xl"></i>
                </div>
                <div className=' hover:text-green-500'>
                <i class="fa-brands fa-whatsapp fa-2xl"></i>
                
                </div>
            </div>
        </div>
        
        </nav>
    
    </header>
  )
}
