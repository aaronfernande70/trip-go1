import Image from 'next/image'
import React from 'react'
import Title from '../../../Typography/Title'

export default function Tile({imageSrc, imageAlt, name }) {
  return (
    <>
        <Image scr={imageSrc} alt={imageAlt} />
        <Title primitive={"h2"}>{name}</Title>    
    </>
  )
}
