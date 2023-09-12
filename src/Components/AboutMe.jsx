import React from 'react'

function AboutMe() {
  return (
    <div className='flex items-center justify-center py-20 md:py-[91px]' id='aboutMe'>
      <div className='px-14 md:max-w-md lg:max-w-[515px]'>
        <div className='mb-5 text-2xl font-extrabold text-accent-lighter md:text-4xl lg:text-5xl'>

          <span>About Me</span>
        </div>
        <div className='mb-5 text-justyfy font-poppins text-[13px] font-medium text-light lg:text-[15px]'>
          

          <span>
          I am Amarachi Chukwuma, i am a web Developer, a graphic designer and also a dance instuctor. i build website using HTML and CSS at first, then add some JavaScript. forther more i use node js and tailwind css.
          </span>

        </div>
        <button className='text-white text-[12px] px-3 pb-2 py-2 bg-teal-600 rounded-full border-[2px] hover:border-white hover:scale-110 translate-all ease-in-out duration-300  cursor-pointer'>CV

        </button>

      </div>


    </div>
  )
}

export default AboutMe