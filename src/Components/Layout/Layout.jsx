import React from 'react'
import { Outlet } from 'react-router-dom'
import { Offline} from "react-detect-offline";
import {FiWifiOff} from 'react-icons/fi'
import BackToTopBtn from './../BackToTopBtn/BackToTopBtn';
import useLangContext from '../../Hooks/useLangContext';
import Navbar from './../Navbar/Navbar';
import Footer from '../Footer/Footer';


const Layout = () => {


    const {lang, langs} = useLangContext()

    return (

    <div>

        <Navbar />

        <Outlet></Outlet> 
        
        <BackToTopBtn/>

        <Footer />
        

        <Offline>
            <div className='custom-position d-flex justify-content-end'>
                <span
                className="networkStatus alert alert-danger d-flex justify-content-center"
                >
                    <div className='mx-2'>{langs[lang].Titles.connect}</div>
                    <div className='mx-1'> <FiWifiOff className='mb-1' /> </div>
                
                </span>
            </div>
        </Offline>
    
    </div>

)
}

export default Layout