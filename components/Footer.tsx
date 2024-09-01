import React from 'react'
import { RoundedButton } from './RoundedButton';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const imageUrl = "/images/foot-bg.jpg";
  return (
    <div className='bg-cover bg-center bg-no-repeat bg-[#1e1041]  md:h-[70vh] w-full text-white py-20 text-center md:text-left' style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className='flex flex-col gap-4 md:flex-row px-10 md:px-40 justify-around'>
                <div className='md:w-60'>
                <h1 className=' text-4xl font-extrabold cursor-pointer my-7'>Matrix<span className='text-secondary'>Momentum</span></h1>
                <p className=''>We are only satisfied when you are satisfied. If there is any cause for criticism, please do not hesitate to contact us. Regardless of whether you send us an email or a letter, we promise you that we will take your concern very seriously and search for a satisfactory solution.</p>
                <RoundedButton bgColor='bg-secondary' text='Contact Us' color='text-primary' className='mt-5 !text-2xl'/>
                </div>
                <div className='flex flex-col gap-4'>
                    <p>support@matrixmomentum.com</p>
                    <p>35 Upper Richmond Road, London,
                    United Kingdom, SW15 2RD.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-secondary'>Information</h2>
                    <p>About us</p>
                    <p>Rules</p>
                    <p>Faq</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-secondary'>Help</h2>
                    <p>Contact Us</p>
                    <p>Term of Use</p>
                </div>
        </div>
      
        <div className='text-center text-yellow-700 mt-7'>{currentYear} MatrixMomentum. All Rights Reserved</div>
    </div>
  )
}
