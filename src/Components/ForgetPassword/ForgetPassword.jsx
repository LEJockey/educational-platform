import React, { useState } from 'react'
import * as Yup from 'yup'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import useLangContext from '../../Hooks/useLangContext';
import {ImSpinner10} from 'react-icons/im'
import './ForgetPassword.css'

const ForgetPassword = () => {

    const { lang, langs } = useLangContext();

    const baseURL = 'https://route-ecommerce.onrender.com'
    const [loading, setLoading] = useState(false)
    const [successMsg, setsuccessMsg] = useState(null)
    const [errMsg, seterrMsg] = useState(null)
    const [errReset, seterrReset] = useState(null)
    const [mail, setmail] = useState('')

    const navigate = useNavigate()
    

    // Handle Forget Password
    async function forgetPass(value) {
        setLoading(true)

        // try {
        //     let data = await axios.post(`${baseURL}/api/v1/auth/forgotPasswords`, value)
    
        //     if (data.status === 200) {
        //         setsuccessMsg(data.data.message)
        //         setLoading(false)
        //     }
        // } catch (error) {
        //     seterrMsg(error.response.data.message)
        //     setLoading(false)
        // }
        console.log(value)
        setLoading(false)
    }

     // validate entrie email
        let validationSchema = Yup.object ({
            email: Yup.string().required('Email is Required').email('Invalid email address *exemple@yyy.zzz'),
        })

        let formik = useFormik({
            initialValues: {
                email: ''
            },
            validationSchema,
            onSubmit: function (value, {resetForm}) {
                setmail(value)
                forgetPass(value)
                resetForm()
            }
        })
    

    // Handle Verifaction Code
    async function resetPass(value) {
        setLoading(true)
        try {
            let data = await axios.post(`${baseURL}/api/v1/auth/verifyResetCode`, value)
            if (data.status === 200)
            setLoading(false)
        } catch (error) {
            seterrReset(error.response.data.message)
            setLoading(false)
        }
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

    // Handle Reset Password
    async function handleReset(values) {
        setLoading(true)
          try {
            let data = await axios.put(`${baseURL}/api/v1/auth/resetPassword`, values)
            // console.log (data)
            if (data.data.token) {
              navigate('/login')
            }
          } catch (error) {
            console.log (error)
            seterrMsg(error.response.data.message)
            setLoading(false)
          }
      }
        
      let validationSchemaPass = Yup.object ({
        newPassword: Yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password must start with Capital Letter includes at least 5 and less than 10 chars'),
        confirmNewPassword: Yup.string().required('Confirmation Password is required').oneOf([Yup.ref('newPassword')], 'Confirmation Password doesnot match with the new password')
      })
      let formik2 = useFormik({
        initialValues: {
            newPassword:'',
            confirmNewPassword:''
        },
        validationSchema: validationSchemaPass,
         onSubmit: handleReset
      })


    

  return (

<>
<div className='forget-pass'>

    <Link  data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
        Forget Password?
    </Link>
    

    {/* Sending Mail for Verification Modal*/}
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        
        <div className="modal-dialog modal-dialog-centered">

            {/* Modal Content */}
            <div className="modal-content">
                <div className="modal-header p-0">
                    <h1 className="modal-title" id="exampleModalToggleLabel">Please enter your email <br/>A Verification code will be sent to your email</h1>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <div className="form-floating my-4 text-center">
                        <input
                            type= 'text'
                            className="form-control"
                            id= 'floatingEmail'
                            name='email'
                            placeholder='Email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        
                        <label
                            className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`}
                            htmlFor= 'floatingEmail'
                        >
                            {langs[lang].ContactForm.Email}
                        </label>
                
                        {formik.errors.email && formik.touched.email ? (
                            <div className="alert alert-danger error my-0 py-2">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="modal-footer p-0 text-center d-block">
                        {loading? 
                        <button 
                            className='btn modal-btn'>
                                <ImSpinner10 className='spinner-rotate'/>
                        </button> :
                        <button 
                            type="submit"
                            className="btn modal-btn" 
                            onClick={formik.handleSubmit}
                            disabled={!(formik.isValid && formik.dirty)}
                            data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                                Send
                        </button>
                        }
                        
                    </div>

                </form>

            </div>

        </div>

    </div>
</div>

{/* Verification Code Modal */}
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
                
                {/* {errReset && <div className="alert alert-danger error my-2 py-2">{errReset}</div>} */}

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

{/* Reset Password Modal */}
<div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabIndex="-1">

    <div className="modal-dialog modal-dialog-centered">
    
        <div className="modal-content pass-modal">
            
            <div className="modal-header p-0">
                <h1 className="modal-title" id="exampleModalToggleLabel3">Please enter the new password</h1>
            </div>

            <form >
            <div className="form-floating my-4">
                <input
                    type= 'password'
                    className="form-control"
                    id= 'floatingPassword'
                    name='newPassword'
                    onChange={formik2.handleChange}
                    onBlur={formik2.handleBlur}
                    value={formik2.values.newPassword}
                />
                
                <label
                    className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`}
                    htmlFor= 'floatingPassword'
                >
                {langs[lang].ContactForm.NewPassword}
                </label>
                
                {formik2.errors.newPassword && formik2.touched.newPassword ? (
                    <div className="alert alert-danger error my-0 py-2">{formik2.errors.newPassword}</div>
                ) : null}
            </div>

            <div className="form-floating my-4">
                <input
                    type= 'text'
                    className="form-control"
                    id= 'floatingPassword'
                    name='confirmNewPassword'
                    onChange={formik2.handleChange}
                    onBlur={formik2.handleBlur}
                    value={formik2.values.confirmNewPassword}
                />
                
                <label
                    className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`}
                    htmlFor= 'floatingPassword'
                >
                {langs[lang].ContactForm.PassConfirmation}
                </label>
                
                {formik2.errors.confirmNewPassword && formik2.touched.confirmNewPassword ? (
                    <div className="alert alert-danger error my-0 py-2">{formik2.errors.confirmNewPassword}</div>
                ) : null}
            </div>

            <div className='d-flex align-items-center justify-content-center'>
                <input className='checkbox' type="checkbox" name='remember' value= 'value' id='remember' />
                <label className='mx-1' htmlFor="remember">Remember My Password</label>
            </div>


            </form>

            <div class="modal-footer p-0 mt-4">
                    <button 
                        type='submit'
                        className="btn m-0"
                        onClick={formik2.handleSubmit}
                        disabled={!(formik2.isValid && formik2.dirty)}>
                        Create
                    </button>
            </div>
        
        </div>
    
    </div>
</div>



</>





)
}

export default ForgetPassword