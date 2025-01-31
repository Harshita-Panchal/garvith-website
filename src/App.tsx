import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../src/pages/Home';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
<div>
  <nav className='bg-[#C30E59] flex items-center justify-evenly py-4'>
    <div>
      <img src="src/assets/images/logo.png" alt=""  className='w-28' />
    </div>
    <ul className='flex text-white' >
      <li className='px-3 cursor-pointer text-base'>Home</li>
      <li className='px-3 cursor-pointer text-base'>About Garvith</li>
      <li className='px-3 cursor-pointer text-base'>Performance</li>
      <li className='px-3 cursor-pointer text-base'>Gallery</li>
      <li className='px-3 cursor-pointer text-base'>Contact US</li>
    </ul>
    <button className='text-white border border-white rounded-full w-44 py-2 '>
      Book Show
    </button>
  </nav>
  <Home />
  <Footer/>
</div>
    </>
  )
}

export default App
