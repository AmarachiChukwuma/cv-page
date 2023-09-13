import React from 'react'

function Hero() {
  
  return (
    
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center'>
      <div className='mb-10'>
        <p className='text-white text-[13px]'>HELLO THERE, WELCOME TO MY SITE</p>
        <p className='text-white text-[40px] font-bold'>I am Amarachi Chukwuma</p>
        <p className='text-teal-400 text-[30px] font-bold'>I am a Full Stack Developer</p>
        <p className='text-white text-[30px] font-bold'>& Graphic Designer</p>
        <div className='mt-4 flex gap-4'>
          <button className='text-white text-[12px] px-3 pb-2 py-2 bg-teal-600 rounded-full border-[2px] hover:border-white hover:scale-110 translate-all ease-in-out duration-300  cursor-pointer'>CONTACT ME</button>
        </div>
      </div>
      <div className='flex justify-center'>
      <div className='h-[320px] w-[250px] p-2 rounded-[20px]'>
        <img src='../src/assets/image/profe1.jpg'
        className='w-[910px] h-[320px] bg-teal-600 p-7 rounded-full mt-7'
        />
      </div>
      </div>
    </div>
  )
}

export default Hero