"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { RoundedButton } from './RoundedButton'
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  return (
    <div className='flex md:flex-row flex-col justify-between  md:items-center items-start md:px-40 px-10 py-10 bg-primary'>
      <div className='flex justify-between gap-10'>
      <h1 className='text-white text-4xl font-extrabold cursor-pointer'>Matrix<span className='text-secondary '>Momentum</span></h1>
      <CiMenuBurger onClick={() => setShowMenu(!showMenu)} className={`md:hidden ${showMenu ?  "hidden" : ""} text-secondary text-4xl font-extrabold cursor-pointer`}/>
        <IoMdClose  onClick={() => setShowMenu(!showMenu)} className={`md:hidden ${!showMenu ?  "hidden" : ""} text-secondary text-4xl font-extrabold cursor-pointer`}/>
      </div>
        
       {
            showMenu &&
            <>
               <ul className='flex md:flex-row flex-col  text-white justify-around grow'>
            <li className='cursor-pointer md:m-0 m-5'><Link href="/">HOME</Link></li>
            <li className='cursor-pointer md:m-0 m-5'><Link href="/aboutus">ABOUT US</Link></li>
            <li className='cursor-pointer md:m-0 m-5'><Link href="/faq">FAQ</Link></li>
            <li className='cursor-pointer md:m-0 m-5'><Link href="/termofuse">TERM OF USE</Link></li>
            <li className='cursor-pointer md:m-0 m-5'><Link href="/contactus">CONTACT US</Link></li>
        </ul>
        <ul className='flex md:flex-row flex-col '>
            <li><select className='bg-secondary text-primary rounded-full p-3 mr-2 mb-5 md:mb-0'>
                    <option selected value="Yoruba">Select Language</option>
                    <option value="Yoruba">Yoruba</option>
                    <option value="English">English</option>
                    <option value="Chinese">Chinese</option>
                </select></li>
                <li>
                    <RoundedButton bgColor='bg-secondary' color='text-primary' text='LOGIN' />
                </li>
        </ul>
            </>
           
       }
    </div>
  )
}
