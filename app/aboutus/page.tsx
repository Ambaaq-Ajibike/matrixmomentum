import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PageTitle } from '@/components/PageTitle'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    const bgImg = "/images/body-bg.jpg"
  return (
    <div>
        <Header/>
        <PageTitle t1={"ABOUT"} t2={"US"}/>
        <div className='py-20 px-48 flex gap-10 bg-center bg-cover bg-no-repeat text-gray-500' style={{backgroundImage: `url(${bgImg})`}}>
            <div >
                <h1 className='text-3xl my-7'>WELCOME TO</h1>
                <h1 className='text-primary text-4xl mb-5 font-bold'>MatrixMomentum</h1>
                <Image
                    alt='line'
                    src={"/images/line-img1.png"}
                    width={300}
                    height={45}
                    className='mb-5'
                />
                <p className='text-lg my-4'>A leading investor and trusted partner for alternative assets. We create sustainable value for our clients and society.</p>
                <p className='text-lg my-4'>MatrixMomentum is an award winning forex and stock broker, providing automated trading services and facilities to both retail and institutional clients. Through its policy of providing the best possible automated trading conditions to its clients and allowing both full time and part time investors automation for crypto trading. MatrixMomentum is the leading crypto trading bot for Binance, Coinbase Pro, Bitmex and more. Easy to use, self hosted trading bot software.</p>
                <p className='text-lg my-4'>Due to their long investment horizon and attractive risk/return profile, our alternative investments are an ideal match for the requirements of MatrixMomentum given our long-term liabilities.</p>
                <p className='text-lg my-4'>Investment management is an integral part of the insurance business, as the premiums of MatrixMomentum clients are invested to meet long-term liabilities. MatrixMomentum worldwide investment activities comprise assets of over EUR 750 billion across a range of asset classes, sectors and countries. As a result, MatrixMomentum is directly and indirectly connected with other businesses, sectors and economies, and is therefore an integral part of the global economy.</p>
            </div>
            <div className='mt-20'>
            <p className='text-lg my-4'>ACP as MatrixMomentum captive investment manager for alternative assets strives to invest sustainably across our three asset classes. In order to keep up with our ambition, we incorporate Environmental, Social and Governance (ESG) factors into our investment processes, for example through our exclusion policy, research, corporate and country analysis, monitoring and risk management. We firmly believe that considering ESG factors in investment management is not a short-term trend, but will change the business.</p>
            <p className='text-lg my-4'>ACP is committed to the United Nations Principles for Responsible Investment (UN PRI). Our parent company, MatrixMomentum Investors, is a signatory to the UN PRI, and so in addition to integrating ESG principles in our investment process, we also incorporate these into our ownership policies and practices and aim for appropriate disclosure on ESG issues by the entities in which we invest. Moreover, we strive to enhance the implementation effectiveness of the principles and regularly report on our activities and progress of implementation. Our commitment covers all assets we invest in.</p>
            </div>
        </div>
      
        <Footer/>
    </div>
  )
}

export default AboutUs