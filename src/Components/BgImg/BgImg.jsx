import React from 'react'
import './BgImg.css'
import ImageComp from '../ImageComp/ImageComp'

const BgImg = ({src='', alt='', className=''}) => {
  return (
    
    <figure className= {`m-0 custom-img ${className}`}>
      <ImageComp  src={src} alt={alt}/>
    </figure>
    

  )
}

export default BgImg