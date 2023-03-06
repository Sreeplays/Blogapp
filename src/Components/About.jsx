import React from 'react'
import BgImageDesign from '../assets/Desing.jpg'
import Aboutimage from '../assets/About.png'
import minecraft from '../assets/icons8-minecraft-pickaxe-16.png'
import valorant from '../assets/Valorant.png'
import dota from '../assets/dota.png'
import smite from '../assets/smite.png'
import html from '../assets/html.png'
import reactjs from '../assets/react.png'
import css from '../assets/css.png'
import blender from '../assets/blender.png'
import { NavLink } from 'reactstrap'
const About = () => {

  return (
    <div className='w-full my-32'>
    
        <div>
            <div className='text-center font-sans py-20'>
            
                <h2 className='text-5xl font-bold '>  About </h2>
                <p className='text-2xl '>Hello guys this is a place in which you can see blogs and posts about gaming and coding stuff those who are interested can write a blog and also request any question through my gmail i will post it as a answer in the blog</p>
            </div>
            <div className='grid md:grid-cols-3 gap-1 px-1 text-center'>
              <div></div>
              <div className='px-10 py-10 text-2xl border rounded-xl shadow-xl font-bold bg-gradient-to-l from-red-500 to-white text-transparent bg-clip-text relative'>
                <NavLink href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdDzZNQfHKKcQrpxgpljRGqRvrhqFmXfXbXQsDnWnlJfPGwDrfwkjBMbHqcqWdqWhhrMXTG" target='_blank'>Gmail</NavLink>
              
              </div>
              <div></div>
            </div>
        </div>
        <div className='w-full h-screen my-32 '>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-semibold text-center'>Games That I Play</h2>
            <p className='text-3xl py-8 text-gray-600 text-center'>The games that I play normally and  some of them are not uploaded on Youtube</p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
        <div className=''>
          
          <img src={minecraft} alt="minelogo" className='w-7'/>
          <div>
              <h3 className='text-xl font-semibold border rounded-md drop-shadow-md bg-green-300 py-2 my-2'>Minecraft</h3>
              <p className='text-base font-bold py-4'>Minecraft is the game that I play the most and also It is the one that I upload !!</p>
          </div>
      </div>
      <div className=''>
          
          <img src={valorant} alt="minelogo" className='w-7'/>
          <div>
              <h3 className='text-xl font-semibold border rounded-md drop-shadow-md bg-red-300 py-2 my-2'>Valorant</h3>
              <p className='text-base font-bold py-4'>This is another famous game that you all might know and I don't upload this because the video is very choppy and I will soon fix that :D</p>
          </div>
      </div>
      <div className=''>
          
          <img src={dota} alt="minelogo" className='w-7'/>
          <div>
              <h3 className='text-xl font-semibold border rounded-md drop-shadow-md bg-gray-400 py-2 my-2'>Dota 2</h3>
              <p className='text-base font-bold py-4'>Dota 2 is another rpg game that I play and I am not getting any content to record but I will try to upload it soon!</p>
          </div>
      </div>


      <div className=''>
          
          <img src={smite} alt="minelogo" className='w-7'/>
          <div>
              <h3 className='text-xl font-semibold border rounded-md drop-shadow-md bg-gradient-to-l from-blue-300 to-purple-600 py-2 my-2'>Smite</h3>
              <p className='text-base font-bold py-4'>This is more like Dota 2 and it is one of my favourites it is like a fight between gods etc :D</p>
          </div>
        
          


      </div>
     

        
      </div>    
     </div>
     <div className='text-center'>
         <h3 className='text-5xl font-semibold'>Skills</h3>
         <div>
            <p  className='text-3xl py-8 text-gray-600 text-center'>These are the skills that I have develeped from these years :D</p>
         </div>
     </div>
     <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
     <div className=''>
          
          <img src={html} alt="minelogo" className='w-7'/>
          <div>
              <h3 className='text-lg font-semibold border rounded-md drop-shadow-md bg-orange-400 py-2 my-2 text-center'>HTML</h3>
              
          </div>
      </div>
      <div className=''>
          
          <img src={reactjs} alt="minelogo" className='w-7'/>
          <div>
              <h3 className='text-lg font-semibold border rounded-md drop-shadow-md bg-blue-300 py-2 my-2 text-center'>Reactjs</h3>
             
          </div>
      </div>
      <div className=''>
          
          <img src={css} alt="minelogo" className='w-7'/>
          <div>
              <h3 className='text-xl font-semibold border rounded-md drop-shadow-md bg-gradient-to-r from-blue-800 to-blue-200 py-2 my-2 text-center'>Css</h3>
              
          </div>
      </div>
      <div className=''>
          
          <img src={blender} alt="minelogo" className='w-7'/>
          <div>
              <h3 className='text-xl font-semibold border rounded-md drop-shadow-md bg-gradient-to-r from-orange-300 to-blue-400 py-2 my-2 text-center'>Blender</h3>
       
          </div>
      </div>


     </div>
    </div>
    </div>
    
  )
}

export default About