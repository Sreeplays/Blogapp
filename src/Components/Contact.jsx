import React, { useRef, useState } from 'react';
import { MailIcon, CursorClickIcon, } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import Contactimg from '../assets/Conta.jpg'
import emailjs from '@emailjs/browser';
import { Button, Form, Input, Label, NavLink } from 'reactstrap';

const Result =() =>{
    return(
        <p>Your message has been succesfully sent. I will contact you soon</p>
     
    )
    
}

const Contact = () => {
    const [result, showResult] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_tpcnr0n', 'template_okrpsag', e.target, 'RY1AxGngOMrpk1wSq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true)
    };
  return (
    <div className='w-full h-screen mt-24 bg-repeat'>
        <div className='w-full h-[720px] bg-gray-900/70 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={Contactimg} alt="/" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <h2 className='pt-18 text-slate-300 uppercase text-center text-5xl py-10'>Contact me</h2>
            <p className='text-5xl font-bold py-7 text-center'>Mail me if you have any doubt or any issues with the website...</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm-pt-20 text-black'>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <MailIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-6'>Mail me</h3>
                    <p className='font-semibold text-xl'>Mail me to play interact and talk with me :D</p>
                </div>
                <div className='bg-zinc-200 pl-8 py-4'>
                    <NavLink href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDkxGxCwcfBfCzwDgQCjxWjxBZSsKWFCsgnWfGBXTKjWtRNRCLjnnldzMhChNWBvnpJRMVG" target='_blank' className='flex items-center text-indigo-600 border-2 '>Click Here</NavLink>
                </div>
            </div>
            
            <div className='text-center align-middle border relative max-w-[720px] rounded-xl bg-slate-200'>
            <h1 className='text-center font-bold relative text-2xl text-black'>Contact form </h1>
            <Form className='relative items-center text-black rounded-xl text-center' onSubmit={sendEmail}>
                <Label className='flex text-center rounded-md'>Name</Label>
                <Input type="text" name='name' className='flex text-center text-white rounded-md drop-shadow-xl px-6 py-2'/>
                <Label  className='flex text-center'>Email</Label>
                <Input type="email" name='email' className='flex text-center text-white rounded-md drop-shadow-xl px-6 py-2' rounded-md/>
                <Label className='flex text-center'>Message</Label>
                <Input type='textarea' name='Message' className='py-4 my-4'/>
                <Button className='py-2 px-4'>Submit</Button>
                <div className='row'>{result ? <Result /> : null}</div>
            </Form>
        </div>
        </div>
        <div>

          
        </div>



    </div>
  )
}

export default Contact