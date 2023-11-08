import React, { useContext } from 'react'
import './Navbar.css'

import { langContext } from '../../Context/LangContext'



const Navbar = ({contactDetails}) => {

    const {lang, setLang, langs} = useContext(langContext) 
    function changLang() {
        lang == 'ar'? setLang('en'): setLang('ar')
    }
    
    return (
    <>
    
    
    <nav className="">

      <h1>Hello</h1>


    
    </nav>
    </>

  )
}



export default Navbar