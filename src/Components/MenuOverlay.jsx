import React from 'react'

function MenuOverlay({menuList}) {
  return (
    <div className='absolute text-center left-0 min-h-full backdrop-blur-lg w-full mt-7'>
        {menuList.map((item)=>
            <h1 className='text-white hover:text-teal-600 text-[24px] mb-6 justify-center mt-10
            hover:scale-110 translate-all ease-in-out duration-300  cursor-pointer'>{item.title}</h1>
        )}
    </div>
  )
}

export default MenuOverlay