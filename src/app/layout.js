"use client"

import { Poppins } from 'next/font/google'
import './globals.css'
import { useState, useEffect } from 'react'

const poppins = Poppins({ weight: '400', style: 'normal',subsets: ['latin'] });

// export const metadata = {
//   title: "Muhammad Afif Ma'ruf",
//   description: "Muhammad Afif Ma'ruf Portfolio Website",
// }

export default function RootLayout({ children }) {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setColor(true);
      } else {
        setColor(false);
      }
    }
  
    window.addEventListener('scroll', changeColor);
    
    return () => {
      window.addEventListener('scroll', changeColor);
    };
  })

  return (
    <html lang="en">
      <body className={poppins.className}>
        <nav className={color? 'shadow-[3px_5px_10px_rgba(0,0,0,0.5)] duration-300 fixed w-full z-20 top-0 start-0 bg-secondary-base' : 'fixed w-full z-20 top-0 start-0 bg-secondary-base'}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-lg font-semibold whitespace-nowrap text-primary-base">MUHAMMAD <span className='text-tertiary-base'>AFIF MA</span>'RUF</span>
            </a>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                <li>
                  <a href="#" className="block p-2 rounded text-primary-base hover:text-tertiary-base text-sm duration-300">HOME</a>
                </li>
                <li>
                  <a href="#" className="block p-2 rounded text-primary-base hover:text-tertiary-base text-sm duration-300">SKILL</a>
                </li>
                <li>
                  <a href="#" className="block p-2 rounded text-primary-base hover:text-tertiary-base text-sm duration-300">EXPERIENCE</a>
                </li>
                <li>
                  <a href="#" className="block p-2 rounded text-primary-base hover:text-tertiary-base text-sm duration-300">PROJECT</a>
                </li>
                <li>
                  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse rounded-md bg-tertiary-base hover:bg-tertiary-hover duration-300">
                    <a href="#" className="block p-2 rounded text-secondary-base font-bold text-md">CONTACT</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className='bg-secondary-base'>
          {children}
        </main>
      </body>
    </html>
  )
}
