import React from 'react'

export const Header = () => {
  return (
    <section className='Header opacity-80 z-50 sticky bg-gradient-to-b from-black via-black flex gap-4 justify-between p-5'>
        <div id="pageLogo">
            <span className='text-lg font-extralight'>Trip</span>
            <span className='text-lg font-bold'>GO</span>
        </div>
        <div id="navBar">
            <nav className='text-sm'>
                <ul className='flex gap-6'>
                    <li>
                        <button className='hover:underline-offset-4 hover:underline'>
                        about TripGO
                        </button>
                    </li>
                    <li>
                        <button className='hover:underline-offset-4 hover:underline'>
                        Plan your Trip
                        </button>
                    </li>
                    <li>
                        <button className='hover:underline-offset-4 hover:underline'>
                        Destinations
                        </button>
                    </li>
                    <li>
                        <button className='hover:underline-offset-4 hover:underline'>
                        inspiration
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        <div id="utilityNav">
            <nav className='text-sm'>
                <ul >
                    <li>
                        lan
                    </li>
                </ul>
            </nav>
        </div>
    </section>
  )
}
