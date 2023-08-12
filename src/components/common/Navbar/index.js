"use client"
import React, { useState } from 'react'
import isMobile from '../../../Helpers/common'

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)
  return (
    <div>
        <button className='md:hidden' >
            menu
        </button>
        <nav className="navbar-full">
            <ul className='flex gap-8 max-md:hidden'>
                <li className=''>item1</li>
                <li>item1</li>
                <li>item1</li>
            </ul>
        </nav>
        
        </div>
  )
}
