import React from 'react'
import { Button } from './Button'
import { useState } from 'react'
export const Password_login = () => {
    const [value,setValue] = useState('');
    const handleInput = (e)=>{
        setValue(e.target.value)
    }
  return (
    <div className='flex justify-center bg-white h-60 w-96 rounded-lg'>
        <div>

        <h1 className='flex justify-center text-sky-700 text-3xl mb-4' >Login</h1>
        <p>Fill all form field to go to next</p>
        <input type="password" name="password" id="password" value={value} onChange={handleInput} placeholder='Type your Password' className='border-2 border-gray-300 focus:border-sky-blue-600 rounded-md px-3 py-2 w-60 outline-none hover:border-sky-600 ' />
        <a href="/" className='flex justify-start text-sky-800'>Forgot password?</a>
        <div className='flex justify-end'>

        <Button button_text='Login'/>
        </div>
        </div>
    </div>
  )
}
