import React from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Button, Dropdown } from "reactstrap";

const CustomNavbar = () => {
   const [nav, setNav] = useState(false)
   const handleClick = () => setNav(!nav)
   const { user, logOut } = UserAuth();

   const handleSignOut = async () => {
     try {
       await logOut()
     } catch (error) {
       console.log(error)
     }
   }
 
  return (
    <div >
        <Navbar className='px-2 flex justify-between item-centre w-full h-full '>
            <div className='flex items-center'>
                <NavbarBrand className='font-bold text-2xl mr-4 sm:text-3xl text-gray-800'><NavLink href='/'>SreePlays</NavLink></NavbarBrand>
                <div className='hidden md:flex'>
                 <div className='pl-4'><NavLink href='/' >Home</NavLink></div >
                 <div className='pl-4'><NavLink href="/about" >About</NavLink></div >
                 <div className='pl-4'><NavLink href="/contact" >Contact</NavLink></div >
                 <div className='pl-4'><NavLink href="/blog" >Blog</NavLink></div >
                 
                
                </div>
            </div>
            <div className='hidden md:flex pr-3'>
               

              {user?.displayName ? (<> <Button className='px-3 mx-3' onClick={handleSignOut}>Logout</Button> <NavItem className='border border-red-300 py-4 px-7 font-bold'><NavLink href="/createpost">Create Post</NavLink></NavItem><NavItem className='border border-red-300 py-4 px-7 font-bold'><NavLink href="/account">Account</NavLink></NavItem> </>) : (<><NavLink href="/login" className='border bg-purple-400 py-2 px-3 rounded-lg'>Sign In</NavLink><NavLink href="/signup" className='ml-4 border bg-rose-400 py-2 px-3 rounded-lg'>Sign Up</NavLink></>)}
            
              
            </div>
            <div className='md:hidden relative' onClick={handleClick}>
            {!nav ? (<MenuIcon className='w-6'/>) : (<XIcon className='w-6'/>)}
            
            </div>
            </Navbar>
           <div className={!nav ? 'hidden' : 'absolute bg-slate-100 w-full px-7'}>
                 <div className='border border-zinc-500 w-full pb-3'><NavLink href='/'>Sreeplays</NavLink></div>
                 <div className='border border-zinc-500 w-full pb-3'><NavLink href='/about'>About</NavLink></div>
                 <div className='border border-zinc-500 w-full pb-3'><NavLink href="/contact">Contact</NavLink></div>
                 <div className='border border-zinc-500 w-full pb-3'><NavLink href="/blog">Blog</NavLink></div>  
                
              <div className='flex flex-col my-3'>
              
              {user?.displayName ? (<> <Button className='px-3 mx-3' onClick={handleSignOut}>Logout</Button> <NavItem className='border border-red-300 py-4 px-7 font-bold'><NavLink href="/createpost">Create Post</NavLink></NavItem><NavItem className='border border-red-300 py-4 px-7 font-bold'><NavLink href="/account">Account</NavLink></NavItem> </>) : (<><NavLink href="/login" className='border-red-600  bg-purple-200  mb-3 py-3 text-center font-semibold'>Sign In</NavLink><NavLink href="/signup" className='border-red-600  bg-rose-200  mb-3 py-3 text-center font-semibold'>Sign Up</NavLink></>)}
            


              </div>

           </div>
        
           </div>
  )
  }

export default CustomNavbar