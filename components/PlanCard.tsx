import React from 'react'
export type PlanCardType = {
    planType: string,
    percentage: number,
    hours : number
}
export const PlanCard = ({planType, percentage, hours} : PlanCardType) => {
  return (
    <div className='rounded-2xl hover:bg-[#1d4ed8] py-10 px-4 m-5 bg-black w-[21pc] hover:shadow-[#1d4ed8] hover:shadow-xl'>
        <div className='bg-secondary text-primary uppercase rounded-full text-center text-xl font-bold p-3 self-center'>{planType}</div>
        <div className='rounded mb-8 bg-primary pt-12 pb-6 text-center'>
            <em className='text-white text-5xl font-bold'>{percentage}%</em><br/>
            <em className='text-yellow-500'>for {hours} hours</em>
            </div>
            <div className='flex justify-between gap-24 leading-8'>
                <div className='text-white'>Min - Max Investment: <span className='text-secondary'>$100 - $2000 </span></div>
                <div>
                    <div className='bg-yellow-300 text-primary rounded-full text-center font-bold'>Instant</div>
                    <h4 className='text-white font-bold'>Withdrawals</h4>
                </div>
              
               
            </div>
            <div className='text-center'>
            <div className='border-primary border-4 border-solid rounded-full text-yellow-300 font-bold p-4 mx-10 text-xl my-5'>
                    Invest now
                </div>
            <p className='text-white leading-10'>Principal Included</p>
            <p className='text-white leading-10'>24/7 dedicated support</p>
            </div>
            
    </div>
  )
}
