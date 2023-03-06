import React from 'react'
import ImageSlider from './ImageSlider'
import {
    AtSymbolIcon,
    ChatIcon,
    MailIcon,
    PaperAirplaneIcon,
    ServerIcon,
    DesktopComputerIcon,
    VideoCameraIcon,
    
} from '@heroicons/react/solid'

import bgImage from '../assets/Sreelogo-removebg-preview-removebg-preview.png'
import { DatabaseIcon } from '@heroicons/react/outline'
const Hero = () => {

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title: 'Gaming'
    },
    {
      url : 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', title: 'Programming'
    },
    {
      url : 'https://cdn.iconscout.com/wordpress/2021/03/basics-of-3d--1-.png', title: 'Blender'
    }
  ]

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div className='w-full h-screen bg-zinc-50 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
           <img className='w-full' src={bgImage} alt="/" />
            <div className='flex flex-col justify-center md:items-start  px-2 py:8'>
             <p className='text-center font-bold text-2xl ' >Welcome To The World of Sreeplays</p>
             <h1 className='text-center font-bold py-8 md:text-5xl '>World of Gamers</h1>
             <p className='text-center font-bold text-xl'>This platform is for those who like to code and do gaming stuff. We post blogs about the latest updates in games and coding and you can also join in the community of bloggaming </p>
             
             
            </div>
            
            <div>
     
           </div>
           

        </div>
        <div>
          <div className='text-center'>
            <h1 className='text-lg'>Skills</h1>
          </div>
           <div style={containerStyles}>
            <ImageSlider slides={slides}/>
           </div>
        </div>

    </div>
  )
}

export default Hero