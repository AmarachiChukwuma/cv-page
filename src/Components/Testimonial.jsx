import React from 'react'

const Testimonial =() => {
  return <div className='mx-6 py-14 md:mx-0 md:p-20 md:px-10 lg:px[unset] lg:py-44' id='testimonial'> 
    <div className='relative mx-auto flex max-w-[850px] rounded-lg bg-dark lg:gap-x-6'>
        <div className='absolute top-[13px] left-[13px] -z-10 hidden h-full w-full rounded-lg bg-teal-500 sm:block'/>
        <div className='ml-5 mr-4 flex items-center font-sans text-white sm:ml-6 sm:mr-5 md:mx-11 md:max-w-[900px] lg:mx-14'>
            <div className='py-6 sm:py-8'>
                <div className='mb-4 text[15px] font-medium md:mb-10 md:text-[25px] lg:text-[35px]'>
                    <span>
                        My dedi website was build by Amarachi and i must say she is good. she gave me more ideas pn how i can establish my business and what my business should mean to the world.
                    </span>
                </div>
                
            </div>
        </div>
    
    </div>
    <div className='flex rounded-r-lg bg-white'>
        <img src='../src/assets/image/IMG_5878(2).PNG'/>
    </div>
    </div>
 
}

export default Testimonial