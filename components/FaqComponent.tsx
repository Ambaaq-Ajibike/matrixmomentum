"use client"
import React, { useState } from 'react'
export type FaqType = {
    question: string,
    answer: string
}
const FaqComponent = ({question, answer} : FaqType) => {
    const [showAnswer, setShowAnswer] = useState<boolean>(false)
  return (
    <div className='bg-black  text-white my-10 cursor-pointer p-5'>
        <div className='flex justify-between font-bold text-xl mb-4' onClick={() => setShowAnswer(!showAnswer)}>
            <p>{question}</p>
            {
                showAnswer ? <p>-</p> : <p>+</p>
            }
            
        </div>
        <p className={`text-lg ${showAnswer === true ? "" :  "hidden"}`}>{answer}</p>
    </div>
  )
}

export default FaqComponent