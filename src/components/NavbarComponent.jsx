"use client"

import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from 'react'

function NavbarComponent() {
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
        <nav className={color ? 'shadow-[3px_5px_10px_rgba(0,0,0,0.5)] duration-300 fixed w-full z-20 top-0 start-0 bg-secondary-base' : 'fixed w-full z-20 top-0 start-0 bg-secondary-base'}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-lg font-semibold whitespace-nowrap text-primary-base">MUHAMMAD <span className='text-tertiary-base'>AFIF MA</span>'RUF</span>
                </Link>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                        <li>
                            <Link href={"/"} className="block p-2 rounded text-primary-base hover:text-tertiary-base text-sm duration-300">HOME</Link>
                        </li>
                        <li>
                            <Link href={"#skill"} className="block p-2 rounded text-primary-base hover:text-tertiary-base text-sm duration-300">SKILL</Link>
                        </li>
                        <li>
                            <Link href={"#experience"} className="block p-2 rounded text-primary-base hover:text-tertiary-base text-sm duration-300">EXPERIENCE</Link>
                        </li>
                        <li>
                            <Link href={"#project"} className="block p-2 rounded text-primary-base hover:text-tertiary-base text-sm duration-300">PROJECT</Link>
                        </li>
                        <li>
                            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse rounded-md bg-tertiary-base hover:bg-tertiary-hover duration-300">
                                <Link href={"#contact"} className="block p-2 rounded text-secondary-base font-bold text-md">CONTACT</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent