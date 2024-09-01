import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PlanCard } from "@/components/PlanCard";
import { RoundedButton } from "@/components/RoundedButton";
import Image from 'next/image'

type TradeType={
  icon : React.ReactNode,
  name: string,
 value1: string,
 value2: number,
 percentage: number
}
type AdvanType={
  image : string,
  name: string,
 description: string
}
type PayOutType={
  name: string,
 value: string
}
export default function Home() {
  const trades: TradeType[] = [
    {
      icon: "",
      name: "EUR/USD",
      value1 :" 1.1045",
      value2: -0.00309,
      percentage:-0.28
    },
    {
      icon: "",
      name: "Bitcoin",
      value1 : "58, 924",
      value2: -189.00,
      percentage:-0.32
    },
    {
      icon: "",
      name: "Ethereum",
      value1 : "2, 505",
      value2: -175.00,
      percentage: -0.30
    },
    {
      icon: "",
      name: "SolusUSDT",
      value1 : "135.17",
      value2: -2.82,
      percentage: -2.04
    },
    {
      icon: "",
      name: "SHIBUSDT",
      value1 : "0.00001374",
      value2: -0.00,
      percentage: -0.05
    },
  ]
  const  advans: AdvanType[] = [
    {
      image: "/images/advan/1.png",
      name: "Registered Company",
      description: "Voxledger is officially registered in the Australia."
    },
    {
      image: "/images/advan/2.png",
      name: "Work automated",
      description: "It does not require for investors to have any special knowledge to make profit with us."
    },
    {
      image: "/images/advan/3.png",
      name: "Support 24/7",
      description: "You can find any answer to your questions in the FAQ Page. If you need help please contact us any time 24/7."
    },
    {
      image: "/images/advan/4.png",
      name: "Highly Secured",
      description: "MatrixMomentum have SSL connection, cold storages and the strongest anti-DDoS. It allows to protect your funds on our platform."
    },
    {
      image: "/images/advan/5.png",
      name: "Fast withdrawals",
      description: "Our team works every day. It guarantees that the withdrawal request will be processed Instant."
    },
    {
      image: "/images/advan/6.png",
      name: "Passive income",
      description: "We provide the best solution to get passive income on investment with the minimum amount of $10."
    },

  ]
  const payouts : PayOutType[] = [
    {
       
    }
  ]
  const imageUrl = "/images/banner-bg.jpg";
  const aboutImage = "/images/about-bg.jpg";
  const advanImage = "/images/advan-bg.jpg";
  const plans = [
    {
      planType: "Starters Plan",
      percentage: 5,
      hours : 20
    },
    {
      planType: "BEGINNERS PRO PLAN",
      percentage: 8,
      hours : 20
    },
    {
      planType: "PREMIUM PLAN",
      percentage: 12,
      hours : 36
    },
    {
      planType: "PROMO PLAN",
      percentage: 10,
      hours : 7
    },
    {
      planType: "PROFESSIONAL PLAN",
      percentage: 40,
      hours : 76
    },
  ] 
  return (
    <div>
      <Header/>
      <div
      className="bg-cover bg-center bg-no-repeat h-lvh w-full text-center md:flex"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="py-14 px-10 md:text-left md:p-40 md:px-64 md:pr-[40pc]">
      <h4 className="text-white text-lg">MaxMomentum</h4>
      <h1 className="text-white md:text-6xl text-5xl uppercase font-bold leading-[4pc]">A way to efficiently invest money</h1>
      <p className="text-white text-xl my-10">What if there should add Edge on your Portfolio!</p>
      <div className="flex md:justify-start gap-5 justify-between items-center">
        <RoundedButton bgColor="bg-white" color="text-primary" text="Create An Account"/>
        <RoundedButton bgColor="bg-secondary" color="text-primary" text="Login"/>
      </div>
      </div>
      
    </div>
    <div className="bg-gray-50">
          <div className="flex justify-center items-center flex-col md:grid grid-cols-3 md:place-items-center">
            {plans.map((plan, i) => <PlanCard hours={plan.hours} percentage={plan.percentage} planType={plan.planType} key={i} />)}
          </div>
          <div className="bg-gray-950 text-white flex justify-between items-center p-4 md:mx-28 rounded">
        {
            trades.map((trade, id) => {
              return (
                <marquee  direction="left" key={id}>
                  <div className="flex">
                        <div className="flex">
                        <p> {trade.icon}</p> 
                          <p>{trade.name}</p>
                        </div>
                        <div className="flex">
                        <p>{trade.value1}</p>
                        <p className="text-red-600">{trade.value2} {trade.percentage}%</p>
                        </div>
                  </div>
              </marquee>
            )
          })
        }
      </div>
    </div>
    <div className="bg-cover bg-center bg-no-repeat w-full mt-28"
      style={{ backgroundImage: `url(${aboutImage})` }}>
        <div className="md:w-[50%] md:pl-56 mt-48 text-center md:text-left px-5">
        <div className="mb-10">
            <h1 className="uppercase text-4xl">Welcome To</h1>
            <h1 className="uppercase text-[#30198d] text-4xl">MatrixMomentum</h1>
        </div>
        <div>
          <p className="mb-10 text-lg text-gray-700">A leading investor and trusted partner for alternative assets. We create sustainable value for our clients and society.
          </p>
          <p className="mb-10 text-lg text-gray-700">MatrixMomentum is an award winning forex and stock broker, providing automated trading services and facilities to both retail and institutional clients. Through its policy of providing the best possible automated trading conditions to its clients and allowing both full time and part time investors automation for crypto trading. MatrixMomentum is the leading crypto trading bot for Binance, Coinbase Pro, Bitmex and more. Easy to use, self hosted trading bot software.</p>
          <p className="mb-10 text-lg text-gray-700">Due to their long investment horizon and attractive risk/return profile, our alternative investments are an ideal match for the requirements of Voxledger given our long-term liabilities.</p>

        </div>
        <RoundedButton text="MORE ABOUT US" bgColor="white" color="text-primary" className="border-2 border-secondary border-solid !text-2xl font-bold"/>
        </div>
       
    </div>
    <div className="bg-cover bg-center bg-no-repeat w-full mt-28"
      style={{ backgroundImage: `url(${advanImage})` }}>
        <div className="p-20 md:px-52">
        <div className="mb-10">
            <h1 className="uppercase text-2xl text-yellow-500 mb-4">Why Choose Us</h1>
            <h1 className="uppercase text-white text-4xl">MatrixMomentum</h1>
        </div>
        <div className="flex justify-center items-center flex-col md:grid grid-cols-3 md:place-items-center gap-8 mt-32">
          {
            advans.map(advan => {
              return (
                <div className="text-white flex flex-col justify-center items-center gap-4">
                   <Image
                      src={advan.image}
                      width={100}
                      height={100}
                      alt={advan.name}
                    />
                    <h2 className="text-red-400 text-xl text-center">{advan.name}</h2>
                    <p className="text-base text-center">{advan.description}</p>
                </div>
              )
            })
          }
        </div>
        </div>
        
    </div>
    <div className="bg-black">

    </div>


    <Footer/>
    </div>
  );
}
