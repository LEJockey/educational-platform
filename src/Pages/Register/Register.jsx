import React, { useState } from 'react'
import reImg from '../../assests/Register/hero image.png'
import ImageComp from '../../Components/ImageComp/ImageComp'
import './Register.css'
import useLangContext from '../../Hooks/useLangContext';
import MultiStepForm from '../../Components/MultiStepForm/MultiStepForm';
import FounderStepForm from '../../Components/FounderStepForm/FounderStepForm';

const Register = () => {

    const { lang, langs } = useLangContext();
    const [singleForm, setSingleForm] = useState(true)
    const [multiForm, setMultiForm] = useState(false)

  
  return (
    <section className='register'> 
    <div className="container-lg px-5 px-lg-0">
        <div className="row">

            {/* Register Image */}
            <div className="col-md-6 p-0 mb-3 mb-md-0">
                <ImageComp src={reImg} alt= 'Register Now'/>
            </div>

            {/* Slider Form */}
            <div className="col-md-6 p-0 my-5 my-md-0 position-relative">


                {/* <div className='position-absolute top-0 end-0 px-5 translate-middle-y d-flex'>
                    
                    <button
                    onClick={(e) => {
                        setSingleForm(true);
                        setMultiForm(false);
                    }}
                    className={`show-form1 ${singleForm ? 'active' : ''}`}
                    >
                        Sign Up
                    </button>
                    
                    <button
                    onClick={(e) => {
                        setSingleForm(false);
                        setMultiForm(true);
                    }}
                    className={`show-form2 ${multiForm ? 'active' : ''}`}
                    >
                        Sign Up As a founder
                    </button>
                </div> */}

                {singleForm && <MultiStepForm />}

                {multiForm && <FounderStepForm />}
            </div>
        </div>
    </div>
    </section>
  )
}

export default Register