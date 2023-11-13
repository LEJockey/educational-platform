import React from 'react'
import './HeaderImg.css'
const HeaderImg = ({ src, desc }) => {
    const backGround = {
        backgroundImage: `linear-gradient(89deg, rgba(19, 92, 81, 0.60) 28.11%, rgba(19, 92, 81, 0.00) 98.5%), url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'lightgray',
    };
  
    return (
      <figure className='main-header position-relative d-flex align-items-center' style={backGround}>
        <figcaption className='position-absolute'>
          <h1 className='px-5'>{desc}</h1>
        </figcaption>
      </figure>
    );
  }
  
  export default HeaderImg;

