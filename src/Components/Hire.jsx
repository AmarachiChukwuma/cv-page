import React from 'react'

const Hire = () => {
  return (
    <div className='flex items-center justify-center bg-black pt-10 pb-14 md:py-32'>
        <div className='text-center'>
            <div className='text-[10px] font-semibold text-secondary md:text-sm lg:text-base'>
                <span>Have any project in Mind?</span>
            </div>
            <div className='mb-5 text-2xl font-extrabold text-teal-400 md:text-4xl lg:text-5xl'>
                <span>Just Say Hello!</span>
            </div>
            <button className='text-white text-[12px] px-3 pb-2 py-2 bg-teal-600 rounded-full border-[2px] hover:border-white hover:scale-110 translate-all ease-in-out duration-300  cursor-pointer'>Hire Me</button>
        </div>
    </div>
  )
}

export default Hire