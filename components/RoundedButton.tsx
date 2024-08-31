import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'
interface RoundedButtonType extends HTMLAttributes<HTMLButtonElement>  {
    text : string,
    color: string,
    bgColor: string
}
export const RoundedButton  = ({text, color, bgColor, ...props} : RoundedButtonType) => {
  return (
    <button className={clsx(`${bgColor} ${color} font-bold rounded-full p-3 px-7`, props.className)}>{text}</button>
  )
}
