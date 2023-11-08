import React, { useContext } from 'react'
import './Navbar.css'

import { langContext } from '../../Context/LangContext'
import ImageComp from '../ImageComp/ImageComp'



const Navbar = ({contactDetails}) => {

    const {lang, setLang, langs} = useContext(langContext) 
    function changLang() {
        lang == 'ar'? setLang('en'): setLang('ar')
    }
    
    return (
    <>
    
    
    <nav className="navbar navbar-expand-md  navbar-dark fixed-top py-0 ">

      <h1>Hello</h1>
      


    
    </nav>
    </>

  )
}



export default Navbar