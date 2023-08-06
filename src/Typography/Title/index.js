import React from 'react'

export default function Title({primitive, children}) {
    
    switch (primitive) {
        case 'h1':
          return <h1>{children}</h1>
          break;
        case 'h2':
          return <h2>{children}</h2>
          break;
        case 'h3':
          return <h3>{children}</h3>
          break;
        case 'h4':
          return <h4>{children}</h4>
          break;
        case 'h5':
          return <h5>{children}</h5>
          break;
        case 'h6':
          return <h6>{children}</h6>
          break;
        default :
          return <span>{children}</span>
      }
}
