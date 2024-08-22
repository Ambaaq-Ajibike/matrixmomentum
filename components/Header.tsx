import React from 'react'

export const Header = () => {
  return (
    <div className='flex justify-between items-center px-40 py-10 bg-primary'>
        <h1 className='text-white text-4xl font-extrabold cursor-pointer'>Max<span className='text-secondary'>Momentum</span></h1>
        <ul className='flex text-white justify-around grow'>
            <li className='cursor-pointer'>HOME</li>
            <li className='cursor-pointer'>ABOUT US</li>
            <li className='cursor-pointer'>FAQ</li>
            <li className='cursor-pointer'>TERM OR USE</li>
            <li className='cursor-pointer'>CONTACT US</li>
        </ul>
        <ul className='flex'>
            <li><select className='bg-secondary text-primary rounded-full p-3 mr-2'>
                    <option selected value="Yoruba">Select Language</option>
                    <option value="Yoruba">Yoruba</option>
                    <option value="English">English</option>
                    <option value="Chinese">Chinese</option>
                </select></li>
                <li><button className='bg-secondary text-primary font-bold rounded-full p-3 px-7'>LOGIN</button></li>
        </ul>
    </div>
  )
}
