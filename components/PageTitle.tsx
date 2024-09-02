import React from 'react'
type PageTitleType  = {
    t1 : string,
    t2 : string
}

export const PageTitle = ({t1, t2} : PageTitleType) => {
    const advanImage = "/images/advan-bg.jpg";
  return (
    <div className='bg-cover bg-center bg-no-repeat  flex flex-col justify-center items-center mt-7 py-7' style={{ backgroundImage: `url(${advanImage})` }}>
        <h1 className='text-white text-4xl'>{t1} <span className='text-yellow-400'>{t2}</span></h1>
        <div className='bg-white w-60 h-1 mt-7'></div>
    </div>
  )
}
