import React from 'react'
import './BgImg.css'
import ImageComp from '../ImageComp/ImageComp'

const BgImg = ({src, alt}) => {
  return (

    <figure className= 'custom-img'>
      <ImageComp  src={src} alt={alt}/>
    </figure>

  )
}

export default BgImg