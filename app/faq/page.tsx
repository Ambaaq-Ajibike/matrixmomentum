"use client"
import FaqComponent, { FaqType } from '@/components/FaqComponent'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PageTitle } from '@/components/PageTitle'
import React from 'react'

const page = () => {
  const bgImg = "/images/body-bg.jpg";
  const faqs : FaqType[] = [
    {
        question: "How can I invest with voxledger.com ?",
        answer: "To make a investment you must first become a member of voxledger.com . Once you are signed up, you can make your first deposit. All deposits must be made through the Members Area. You can login using the member username and password you receive when sign up."
    },
    {
        question: "How can I invest with voxledger.com ?",
        answer: "To make a investment you must first become a member of voxledger.com . Once you are signed up, you can make your first deposit. All deposits must be made through the Members Area. You can login using the member username and password you receive when sign up."
    },
    {
        question: "How can I invest with voxledger.com ?",
        answer: "To make a investment you must first become a member of voxledger.com . Once you are signed up, you can make your first deposit. All deposits must be made through the Members Area. You can login using the member username and password you receive when sign up."
    },
    {
        question: "How can I invest with voxledger.com ?",
        answer: "To make a investment you must first become a member of voxledger.com . Once you are signed up, you can make your first deposit. All deposits must be made through the Members Area. You can login using the member username and password you receive when sign up."
    },
    {
        question: "How can I invest with voxledger.com ?",
        answer: "To make a investment you must first become a member of voxledger.com . Once you are signed up, you can make your first deposit. All deposits must be made through the Members Area. You can login using the member username and password you receive when sign up."
    },
    {
        question: "How can I invest with voxledger.com ?",
        answer: "To make a investment you must first become a member of voxledger.com . Once you are signed up, you can make your first deposit. All deposits must be made through the Members Area. You can login using the member username and password you receive when sign up."
    },
    {
        question: "How can I invest with voxledger.com ?",
        answer: "To make a investment you must first become a member of voxledger.com . Once you are signed up, you can make your first deposit. All deposits must be made through the Members Area. You can login using the member username and password you receive when sign up."
    },
  ]
  return (
    <div>
        <Header/>
        <PageTitle t1={"FAQ"} t2={""}/>
        <div className='py-20 px-48 bg-center bg-cover bg-no-repeat text-gray-500' style={{backgroundImage: `url(${bgImg})`}}>
            {faqs.map(q => <FaqComponent answer={q.answer} question={q.question}/>)}
        </div>
      
        <Footer/>
    </div>
  )
}

export default page