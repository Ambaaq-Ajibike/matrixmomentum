import React from 'react'
import { FaEnvelope, FaUser } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { RoundedButton } from '@/components/RoundedButton';

 const page = () => {
  return (
    <div className="flex flex-col md:flex-row gap-20 justify-between items-center px-20 py-10 rounded-md bg-white">
        <div>
            <form action="">
                <div className='bg-[#2a148e] flex p-4 gap-4 items-center my-7 w-96'>
                    <FaUser className='text-white text-xl'/>
                    <input type="text" placeholder='Your Name' className='w-80 bg-[#2a148e] outline-none border-none text-white' />
                </div>
                <div className='bg-[#2a148e] flex p-4 gap-4 items-center my-7 w-96'>
                    <FaEnvelope className='text-white text-xl'/>
                    <input type="text" placeholder='Your Email' className='w-80 bg-[#2a148e] outline-none border-none text-white' />
                </div>
              
                <div className='bg-[#2a148e] flex p-4 gap-4 my-7 w-96'>
                    <BiSolidMessageRounded  className='text-white text-xl'/>
                    <textarea placeholder='Message' className='w-[30rem] bg-[#2a148e] outline-none border-none text-white' />
                </div>
                <div className='flex justify-center'>
                <RoundedButton bgColor='bg-secondary' color='text-white' text='SEND'/>
                </div>
              
            </form>
        </div>
        <div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.053262287323!2d-0.20832758469370202!3d51.45717852219562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f6c08507747%3A0x99efe42334feef16!2s35%20Upper%20Richmond%20Rd%2C%20Putney%2C%20London%20SW15%202RN%2C%20UK!5e0!3m2!1sen!2sin!4v1601727908054!5m2!1sen!2sin" width="450" height="253" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div>
                <p className='my-2'><span className='text-[#442dcb] text-lg'>Address: </span> 35 Upper Richmond Road, London,United Kingdom, SW15 2RD.</p>
                <p className='my-2'><span className='text-[#442dcb] text-lg'>E-mail: </span> support@matrixmomentum.com</p>
            </div>
        </div>
    </div>
  )
}
export default page;
