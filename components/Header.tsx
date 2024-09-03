import React from 'react'
import Link from 'next/link';
import { RoundedButton } from './RoundedButton'

export const Header = () => {
  return (
    <div className='flex justify-between items-center px-40 py-10 bg-primary'>
        <h1 className='text-white text-4xl font-extrabold cursor-pointer'>Matrix<span className='text-secondary'>Momentum</span></h1>
        <ul className='flex text-white justify-around grow'>
            <li className='cursor-pointer'><Link href="/">HOME</Link></li>
            <li className='cursor-pointer'><Link href="/aboutus">ABOUT US</Link></li>
            <li className='cursor-pointer'><Link href="/faq">FAQ</Link></li>
            <li className='cursor-pointer'><Link href="/termofuse">TERM OF USE</Link></li>
            <li className='cursor-pointer'><Link href="/contactus">CONTACT US</Link></li>
        </ul>
        <ul className='flex'>
            <li><select className='bg-secondary text-primary rounded-full p-3 mr-2'>
                    <option selected value="Yoruba">Select Language</option>
                    <option value="Yoruba">Yoruba</option>
                    <option value="English">English</option>
                    <option value="Chinese">Chinese</option>
                </select></li>
                <li>
                    <RoundedButton bgColor='bg-secondary' color='text-primary' text='LOGIN' />
                </li>
        </ul>
    </div>
  )
}
