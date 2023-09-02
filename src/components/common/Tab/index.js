import React from 'react'
import { Children } from 'react'

export default function Tab({children}) {
  return (
    <div className='border-2 hover:border-4 h-16 flex items-center text-center justify-center rounded-lg py-5 w-full min-h-full '>{children}</div>
  )
}
