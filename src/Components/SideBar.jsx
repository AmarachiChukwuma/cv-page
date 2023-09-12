import React from 'react'
import { IoLogoGithub,IoLogoLinkedin,IoMailOpen,IoLogoWhatsapp,IoLogoInstagram } from "react-icons/io5";


function SideBar() {
  return (
    <div className='w-[90px] flex justify-center items-center '>
        {/* <h2 className='border-b-[1px]'>SOCIAL MEDIA</h2> */}
        <div className='flex pt-4 gap-7 mb-10 text-[23px]'>
            <IoLogoGithub className='cursor-pointer hover:scale-110 translate-all ease-out' />
            <IoLogoLinkedin className='cursor-pointer hover:scale-110 translate-all ease-out'/>
            <IoMailOpen className='cursor-pointer hover:scale-110 translate-all ease-out'/>
            <IoLogoWhatsapp className='cursor-pointer hover:scale-110 translate-all ease-out'/>
            <IoLogoInstagram className='cursor-pointer hover:scale-110 translate-all ease-out'/>
        </div>

    </div>
  )
}

export default SideBar