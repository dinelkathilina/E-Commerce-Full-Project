import React from 'react'


export const Button = ({button_text}) => {
  return (
    <button className='bg-sky-600 w-24 h-12 rounded-md shadow-2xl
     text-white hover:bg-sky-700'>{button_text}</button>
  )
}
