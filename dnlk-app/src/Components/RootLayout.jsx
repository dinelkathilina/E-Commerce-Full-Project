import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button } from './Button'
import { Email_login } from './Email_login'
import { Outlet } from 'react-router-dom'
export const RootLayout = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">

    <Header/>
    <div className="flex flex-grow items-center justify-center pt-16 bg-orange-300">
    <Outlet />
    </div>

    <Footer />
    </div>
    </>
  )
}
