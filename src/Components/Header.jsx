import React, { useState } from 'react'
import { HiBars3BottomRight, HiMiniXMark } from "react-icons/hi2";
import MenuOverlay from './MenuOverlay';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
function Header() {

  const [toggle,setToggle]=useState(false)
  const menuList=[
    {
        id:Hero,
        title:'HOME'
    },
    {
        id:AboutMe,
        title:'ABOUT ME'
    },
    {
      id:Portfolio,
      title:'PROJECT'
    },
    {
      id:1,
      title:'EXPERIENCE'
    },
    {
      id:1,
      title:'CONTACT'
    },
  ]
  return (
    <div className='flex items- justify-between'>
      <div>
        <h2 className='text-[30px] font-bold text-white'>A 
      
         <span className='text-teal-400'>C/</span>
        </h2>
      </div>
        <div flex className='hidden md:flex gap-4'> 
          {menuList.map((item)=>(
            <div>
            <h2 className='text-white hover:border-[1px] border-teal-400 rounded-full text-[15px] px-3 py-1 cursor-pointer'>{item.title}</h2>
            </div>
          ))}
          
          <h2 className='text-white hover:border-[1px] border-teal-400 rounded-full text-[15px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-teal-400 to-teal-600'>HIRE ME</h2>
        </div>

        <div className='md:hidden'>
        {!toggle? <HiBars3BottomRight onClick={()=>setToggle(!toggle)} className='text-white text-[22px] cursor-pointer'/>
        :<HiMiniXMark onClick={()=>setToggle(!toggle)} className='text-white text-[22px] cursor-pointer'/>}
        {toggle?<MenuOverlay menuList={menuList} />:null}
        </div>
    </div>
  )
}

export default Header