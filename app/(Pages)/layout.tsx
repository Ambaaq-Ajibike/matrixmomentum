import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PageTitle } from '@/components/PageTitle'
import React from 'react'


const Layout = ({ children }: { children: React.ReactNode }) => {
     const bgImg = "/images/body-bg.jpg"
  return (
    <div>
    <Header/>
    <PageTitle t1={"ABOUT"} t2={"US"}/>
    <div className='py-20 px-48 flex gap-10 bg-center bg-cover bg-no-repeat text-gray-500' style={{backgroundImage: `url(${bgImg})`}}>
        {children}
    </div>
    <Footer/>
</div>
  )
}

export default Layout