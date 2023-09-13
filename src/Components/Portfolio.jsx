import React from 'react'

function Portfolio() {
  return (
    <div className='flex items-center justify-center py-20 md:py-[91px]' id='aboutMe'>
      <div className='px-14 md:max-w-md lg:max-w-[515px]'>
        <div className='mb-5 text-2xl font-extrabold text-accent-lighter md:text-4xl lg:text-5xl'>

          <span>Project</span>
        </div>
        <div className='mb-5 text-justyfy font-poppins text-[13px] font-medium text-light lg:text-[15px]'>
          

          <span>
            this my project
          </span>
          <ul>
            <a href='https://jewryamarachi.netlify.app/?authuser=0'>
              <li>
                Jewry client project
              </li>
              {/* <img src='../src/assets/image/profe1.jpg'
                className='w-[910px] h-[320px] bg-teal-600 p-7 rounded-full mt-7'/> */}
            </a>

            <a href='https://iable-dancing-studio.netlify.app/?authuser=0'>
              <li>
                Iable dance-studio
            </li></a>
            
            <a href='https://iable-dancing-studio.netlify.app/?authuser=0'>
              <li>
                Dedi clothing brand
            </li></a>

            <a href='https://dreambigger.netlify.app/?authuser=0'>
              <li>
                Dream Bigger
            </li></a>

            <a href='https://iable-dancing-studio.netlify.app/?authuser=0'>
              <li>
                Dedi clothing brand
            </li></a>
          </ul>
 
        </div>
      </div>
    </div>
  )
}

export default Portfolio