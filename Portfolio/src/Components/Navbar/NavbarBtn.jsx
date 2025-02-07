import React from 'react'
import {LuArrowDownRight} from 'react-icons/lu'

function NavbarBtn() {
  return (
    <button className='px-4 py-2 rounded-full text-xl text-white font-bold border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:scale-110 transition-all duration-500 hover:border-orange hover:shadow-cyanShadow'>
        Hire me  
        <div className='sm:hidden md:block'>

        <LuArrowDownRight/>
        </div>
    </button>
  )
}

export default NavbarBtn