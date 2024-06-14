import React from 'react'

const Header = () => {
  return (
    <div className="w-full fixed top-0 h-18 text-white p-4 flex flex-row space-x-52 " style={{backgroundImage:'url(./footer.jpg)'}} >
            <a href="/"><img src="./dnlk_logo.png" alt="Home" className=' size-14' /></a>
            <div className='space-x-16 m-4'>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kid</a>
            </div>
            <div className='space-x-16 m-4 '>
            <a href="#">Login</a>
            <a href="#">Signup</a>
            </div>
    </div>
  )
}

export default Header