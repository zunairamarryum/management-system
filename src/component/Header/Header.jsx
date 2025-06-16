import React from 'react'
import logo from "./../../././../public/images/logo.png"
const Header = () => {
  return <div className='w-full bg-white h-65px w-1440px border-2 border-b-blue-600'>
   <div>
      <img src= {logo} alt='logo' w-31px h-40px/>
      <span className='bg-gray-700'>Byway</span>
   </div>
   </div>
}

export default Header
