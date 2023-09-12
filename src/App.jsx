import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import SideBar from './Components/SideBar'
import AboutMe from './Components/AboutMe'
import Testimonial from './Components/testimonial'
import Hire from './Components/Hire'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gradient-to-tr from-[#242424]
    via-[#1d0e58] to-[c] px-8 md:px-14 lg:px-36 pb-10 pt-7'>
        <Header/>
        <Hero/>
        <SideBar/>
        <AboutMe/>
        <Testimonial/>
        <Hire/>
        <Contact/>
    </div>
  )
}

export default App
