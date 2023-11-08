import React, { useEffect, useState } from 'react'
import './BackToTopBtn.css'
import { FaArrowUp } from 'react-icons/fa'

const BackToTopBtn = () => {

    const [show, setShow] = useState(false)

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            window.scrollY > ( window.innerHeight - 350 )? setShow(true) :
            setShow(false)
        })
    })

    // const scrollToTop = () => scroll.scrollToTop
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    
  return (
    <>
      <button
        className={`upBtn ${show ? '' : 'hidden'}`}
        onClick={scrollToTop}
      >
        <FaArrowUp/>
      </button>
    </>
  )
}

export default BackToTopBtn