import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-blue-200 p-2 flex items-center justify-center'>
        
        <ul className='flex items-center space-x-4 '>
            <Link to="/Home"><li className='p-2 font-bold text-lg cursor-pointer'>Home</li></Link>
            <Link to="/AboutUs"><li className='p-2 font-bold text-lg cursor-pointer'>About Us</li></Link>
        </ul>
        
    </div>
  )
}

export default Header;