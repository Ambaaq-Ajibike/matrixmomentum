import React from 'react'
type RoundedButtonType = {
    text : string,
    color: string,
    bgColor: string
}
export const RoundedButton = ({text, color, bgColor} : RoundedButtonType) => {
  return (
    <button className={`${bgColor} ${color} font-bold rounded-full p-3 px-7`}>{text}</button>
  )
}
