import React, { useState, useEffect } from 'react';
import './MultiStepForm.css'; 
import useLangContext from '../../Hooks/useLangContext';
import 'react-phone-number-input/style.css';
import { Country, State}  from 'country-state-city';
// import { ICountry, IState, ICity } from 'country-state-city'

import PhoneInput from 'react-phone-number-input'
import axios from 'axios';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import {ImSpinner10} from 'react-icons/im'
import rightLogo from '../../assests/Register/right.png'
import ConfirmCode from '../ConfirmCode/ConfirmCode';
import google from '../../assests/Register/google-icon.png'
import facebook from '../../assests/Register/facbook-icon.png'
import insta from '../../assests/Register/Insta-icon.png'


const MultiStepForm = () => {


    

    // const baseURL = 'https://route-ecommerce.onrender.com'  // or 'https://route-ecommerce-app.vercel.app'

    const { lang, langs } = useLangContext();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false)
    const [errReset, seterrReset] = useState(null)

    // const [errMsg, setُrrMsg] = useState(null)
    
    let navigate = useNavigate()

    async function handleRegister(values) {
        // setLoading(true)
        // let {data} = await axios.post(`${baseURL}/api/v1/auth/signup`, values).catch(err => {
        // console.log (err)
        // setLoading(false)
        // setُrrMsg(`${err.response.data.errors.param}: ${err.response.data.errors.msg}`) })
        // if (data.message === 'success') {
        //     setLoading(false)
        //     navigate('/login')
        // }
        setLoading(true)
        console.log(values)
        console.log(values.name)
        setLoading(false)
    }
    
    let validationSchema = Yup.object ({
        name : Yup.string().required('Name is Required').min(3, 'Name minlength is 3 chars').max(10, 'Name maxlength is 10 chars'),
        email: Yup.string().required('Email is Required').email('Invalid email address *exemple@yyy.zzz'),
        password: Yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password must start with Capital Letter includes at least 5 and less than 10 chars'),
        rePassword: Yup.string().required('Please reEnter Your Password').oneOf([Yup.ref('password')], 'Confirm password does not match'),
        phone: Yup.string().required('Phone is required'),
        jobTitle: Yup.string().required('Job Title is required'),
        country: Yup.string().required('Country is required'),
        state: Yup.string().required('City is required'),
    })


    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password:'',
            rePassword: '',
            phone:'',
            jobTitle: '',
            country: '',
            state: '',
        },
        validationSchema,
        onSubmit: handleRegister
    })

    async function resetPass(value) {
        setLoading(true)
        console.log(value)
        setLoading(false)
    
    
        }
    
        let formik1 = useFormik({
            initialValues: {
            resetCode1: '',
            resetCode2: '',
            resetCode3: '',
            resetCode4: '',
        },
        onSubmit: resetPass
        })


    useEffect(() => {
        const countries = Country?.getAllCountries();
        formik.setFieldValue('Your Country...', ''); // Set to an empty string or any other default value
        formik.setFieldValue('Your City...', ''); // Set to an empty string or any other default value
    
        // Set initial value for jobTitle
        formik.setFieldValue('jobTitle', ''); // or any other initial value
      }, []);
    
      useEffect(() => {
        const states = State.getStatesOfCountry(formik.values.country);
        formik.setFieldValue('state', ''); // Set to an empty string or any other default value
      }, [formik.values.country]);
    

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };


  return (

    <>
    <form  onSubmit={formik.handleSubmit} className={`multi-form ${step}`}>
    {step === 1 && (
        <div className='col-md-8 mx-auto px-md-0 px-4'> 
            
            {/* Name Input */}
            <div className="form-floating mt-5 mb-4 ">
                
                    <input type="text" 
                    className="form-control " 
                    id="floatingName" 
                    name='name'
                    placeholder='Name' required 
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    />
                    {/* Label */}
                    <label className={` ${lang === 'ar' ? ' end-0' : 'start-0'}`}
                    htmlFor="floatingName"
                    >
                    {langs[lang].ContactForm.Name}
                    </label>

                    {formik.errors.name && formik.touched.name ? (
                    <div className="alert alert-danger error my-0 py-2">{formik.errors.name}</div>
                ) : null}
            </div>
            
            {/* Email Input */}
            <div className="form-floating mb-4 ">
                
                    <input type= 'email'
                    className="form-control"
                    id= 'floatingEmail'
                    name='email'
                    placeholder='Email' required 
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    onChange={formik.handleChange}            
                    />
                    
                    <label className={`${lang === 'ar' ? ' end-0' : 'start-0'}`}
                    htmlFor= 'floatingEmail'
                    >
                    {langs[lang].ContactForm.Email}
                    </label>

                    {formik.errors.email && formik.touched.email ? (
                    <div className="alert alert-danger error my-0 py-2">{formik.errors.email}</div>
                ) : null}

            </div>

            {/* Phone Input */}
            <div className="form-floating mb-4">
                    <PhoneInput 
                    defaultCountry="SA" 
                    className="form-control" 
                    id="floatingPhone" placeholder="Phone" 
                    name='phone'
                    onBlur={(e) => {
                        const clonedEvent = e ? Object.assign({}, e) : null; // Create a copy of the event if it's not null
                        formik.handleBlur(clonedEvent);
                    }}
                    value={formik.values.phone}
                    onChange={(value, data, event) => {
                        if (event) {
                          const clonedEvent = Object.assign({}, event); // Create a copy of the event
                          formik.handleChange(clonedEvent); // You can handle the event here
                        }
                        formik.setFieldValue('phone', value);
                    }}
                    
                    required/>
                    {/* Label */}
                    <label className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`} 
                    htmlFor="floatingPhone"
                    >
                    {langs[lang].ContactForm.phone}
                    </label>

                    {formik.errors.phone && formik.touched.phone ? (
                    <div className="alert alert-danger error my-0 py-2">{formik.errors.phone}</div>
                    ) : null}
            </div>


            <div className='d-flex justify-content-between align-items-center mb-4'>

                <button className='modal-btn opacity-0' disabled type="button" >
                    Prev
                </button>
                
                <div className='active-rec'></div>
                <div className="rec"></div>

                <button className='modal-btn' type="button" onClick={handleNextStep}>
                    Next
                </button>
            </div>
        </div>
    )}


    {step === 2 && (
        <div className='col-lg-8 col-md-10 mx-auto px-md-0 px-4'> 
            
            {/* Password Input */}
            <div className="form-floating mt-5 mb-4 ">
                    <input
                    type= 'password'
                    className="form-control"
                    id= 'floatingPassword'
                    name='password'
                    placeholder='Password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    />
                
                    <label
                    className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`}
                    htmlFor= 'floatingPassword'
                    >
                        {langs[lang].ContactForm.Password}
                    </label>

                    {formik.errors.password && formik.touched.password ? (
                    <div className="alert alert-danger error my-0 py-2">{formik.errors.password}</div>
                ) : null}

            </div>
            
            {/* Repassword Input */}
            <div className="form-floating mb-4 ">

                    <input
                    type= 'text'
                    className="form-control"
                    id= 'floatingRepassword'
                    name='rePassword'
                    placeholder='Confirm Password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.rePassword}
                />
                
                    <label
                    className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`}
                    htmlFor= 'floatingRepassword'
                    >
                        {langs[lang].ContactForm.PassConfirmation}
                    </label>
                
                    {formik.errors.rePassword && formik.touched.rePassword ? (
                    <div className="alert alert-danger error my-0 py-2">{formik.errors.rePassword}</div>
                    ) : null}

                    
            </div>
            
            {/* Job Title */}
            <div className="input-group mb-4">

                <select 
                className="form-select form-control" 
                id="inputGroupSelect01"
                name='jobTitle'
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
                >
                    
                    <option value='' disabled>Job Title...</option>
                    <hr/>
                    <option value="teacher">Teacher</option>
                    <option value="doctor">University Doctor</option>
                    <option value="another">Another</option>

                </select>

                {formik.errors.jobTitle && formik.touched.jobTitle ? (
                    <div className="alert alert-danger error my-0 py-2">{formik.errors.jobTitle}</div>
                    ) : null}

            </div>


            
            {/* Country and State Inputs */}
            <div className='mb-4 d-flex justify-content-between'>

                
                <div className='w-50'>
                    <select
                    className='form-select form-control'
                    id="country" placeholder="Your Country..."
                    name='country'    
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    >
                        <option value= '' disabled>Your Country...</option>
                        
                    {Country.getAllCountries().map((country) => (
                        <option key={country.isoCode} value={country.isoCode}>
                            {country.name}
                        </option>
                    ))}
                    
                    </select>
                    {formik.errors.country && formik.touched.country && (
                    <div className='alert alert-danger error my-0 py-2 w-75'>{formik.errors.country}</div>
                    )}

                </div>


                
                
                    <div className='mx-2'></div>
                
                <div className='w-50'>
                    <select
                    className='form-select form-control'
                    id='state'
                    name='state'
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    >
                        <option value='' disabled> Your City...</option>
                    
                    {State.getStatesOfCountry(formik.values.country).map((state) => (
                        
                        <option key={state.isoCode} value={state.isoCode}>
                            {state.name}
                        </option>
                    ))}
                    </select>

                    {formik.errors.state && formik.touched.state && (
                    <div className='alert alert-danger error my-0 py-2 w-75'>{formik.errors.state}</div>
                    )}
                </div>
                    
                
                
            </div>


            <div className='d-flex justify-content-between align-items-center mb-4'>
                
                <button className='modal-btn ' type="button" onClick={handlePrevStep}>
                    Back
                </button>
                
                <div className="rec"></div>
                <div className='active-rec'></div>

                {/* <ConfirmRegister formik={formik} loading={loading} name={formik.values.name}/> */}
                {loading? 
                <button className='modal-btn' type='button'> <ImSpinner10 className='spinner-rotate'/> </button> : 
                <button className='modal-btn' type='submit' disabled={!(formik.isValid && formik.dirty)}  data-bs-target="#exampleModalToggle" data-bs-toggle="modal" >Create</button>
        }
                
            </div>
        </div>
        
    )}
    </form>

    {/* Confirm Modal */}
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        
        <div className="modal-dialog modal-dialog-centered">

            {/* Modal Content */}
            <div className="modal-content p-5">
                <div className="modal-header text-center p-0">
                    <h1 className="modal-title" id="exampleModalToggleLabel">Hello, {formik.values.name} <br/>Your account has been created successfully</h1>
                    <img className='right-img my-4' src= {rightLogo} alt="" />

                </div>


                <div class="modal-footer p-0 text-center d-block">
                    <form className='m-0' onSubmit={(e)=> e.preventDefault()}>
                    <button 
                        type='submit'
                        className="btn modal-btn"
                        data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                        Confirm
                    </button>
                    </form>
                    {/* <ConfirmCode/> */}
                </div>

                

            </div>

        </div>

    </div>
    
    {/* ReSend Code */}
    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">

        <div className="modal-dialog modal-dialog-centered">

            <div className="modal-content code-modal">
        
                <div className="modal-header p-0">
                    <h1 className="modal-title" id="exampleModalToggleLabel2">A confirmation code has been sent to <br/> your email , Please enter the <br/> confirmation code</h1>
                </div>

                <form onSubmit={formik1.handleSubmit}>

                    <div className="form-floating d-flex justify-content-between">
            
                    {[1, 2, 3, 4].map((index) => (

                        <input
                        key={index}
                        type="number"
                        maxLength="1"
                        className="form-control code-input"
                        id={`floatingCode${index}`}
                        name={`resetCode${index}`}
                        onChange={(e) => {
                            formik1.handleChange(e);
                            if (e.target.value && index < 4) {
                            // Focus on the next input
                            document.getElementById(`floatingCode${index + 1}`).focus();
                            }
                        }}
                        onBlur={formik1.handleBlur}
                        value={formik1.values[`resetCode${index}`]}
                        />
                    ))}
    
                    </div>

                    <div className='resend-code text-center'>Resend Confirmation Code <span className='mx-2 resend-time'>60:00</span></div>
    
                    {errReset && <div className="alert alert-danger error my-2 py-2">{errReset}</div>}

                    <div class="modal-footer p-0">
                        <button 
                        type='submit'
                        className="btn m-0"
                        onClick={formik1.handleSubmit}
                        disabled={!(formik1.isValid && formik1.dirty)}
                        data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>


    {/* Done Modal */}
    <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabIndex="-1">

        <div className="modal-dialog modal-dialog-centered">

            {/* Modal Content */}
            <div className="modal-content p-5">
                <div className="modal-header text-center p-0">
                    <h1 className="modal-title" id="exampleModalToggleLabel3">Email has been confirmed successfully</h1>
                    <img className='right-img mt-4' src= {rightLogo} alt="" />
                </div>
            </div>
        </div>
    </div>

    <p className='or text-center col-8 mx-auto px-4 position-relative'>OR</p>
    <div className='form-icons col-8 px-4 mx-auto mb-4'>

        <img src= {google} alt='Google' />
        <img src= {facebook} alt='Facebook' />
        <img src= {insta} alt='Instgram' />

    </div>


    <div className="col-8 mx-auto">
    <div className='mt-3 text-center mb-4'>Do you have an account? <Link to= '/login' className='sign-color'>Sign Up</Link> </div>

    </div>
</>



);
};

export default MultiStepForm;
