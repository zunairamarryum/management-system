import React from 'react'
import logo from "./../../././../public/images/logo.png"
const Header = () => {
   return <div className='w-full bg-white h-65px w-1440px border-2 border-b-blue-600'>
      {/*Upper Navbar*/}
      <div>

      </div>
      {/*logo*/}
      <div>
         <a href="#">
            <img src={logo} alt='logo' w-31px h-40px />
         </a>
      </div>
      {/* Search-bar*/}
      <div>
         <div>
            <input type="text" placeholder='search'
            className='w-[200px] sm:w-[200px]
            group-hover:w-[300px] transition-all
            duration-300 rounded-full border border-gray-700
            px-2 py-1 focus:outline-none focus:border-1'/>
         </div>
      </div>
      {/* Lower Navbar*/}
      <div>

      </div>
   </div>
}

export default Header
