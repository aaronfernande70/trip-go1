import React from 'react'

export default function Body({children, className}) {
  return (
    <p className={className} >{children}</p>
  )
}
