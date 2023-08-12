import React from 'react'

export default function Chip({children}) {
  return (
    <>
        <span className='border text-xs md:text-sm p-1 rounded-md border-spacing-9'>{children}</span>
    </>
  )
}
