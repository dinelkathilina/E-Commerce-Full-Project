import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button } from './Button'
export const RootLayout = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">

    <Header/>
    <div className="flex-grow pt-16 bg-orange-300">
    
    </div>
    <Footer />
    </div>
    </>
  )
}
