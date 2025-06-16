import React from 'react'
import logo from "./../../././../public/images/logo.png"
const Header = () => {
  return <div className='w-full bg-white height={65px} width={1440px} border-2'>
   <div>
      <img src= {logo} alt='logo' height={40} width={83}/>
      <span>Byway</span>
   </div>
   </div>
}

export default Header
