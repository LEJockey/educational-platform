import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import ImageComp from '../../Components/ImageComp/ImageComp';
import logo from '../../assests/Login/Logo.png';
import useLangContext from '../../Hooks/useLangContext';

import {ImSpinner10} from 'react-icons/im'
import ForgetPassword from '../../Components/ForgetPassword/ForgetPassword';

const Login = ({ saveUserData }) => {
  const { lang, langs } = useLangContext();
  const [loading, setLoading] = useState(false)
  const [errMsg, seterrMsg] = useState(null)

  let navigate = useNavigate();
  const baseURL = 'https://route-ecommerce.onrender.com'
 

  async function handleLogin(values) {

    setLoading(true)
    // try {
    //     let { data } = await axios.post(`${baseURL}/api/v1/auth/signin`, values);
        
    //     console.log(data)
    //     if (data.message === 'success') {
    //       localStorage.token = data.token;
    //       navigate('/')
    //     }
    //   } catch (err) {
    //     seterrMsg(err.response.data.message);
    //   } finally {
    //     setLoading(false);
        
    //   }
    console.log (values)
    setLoading(false)
  }

  let validationSchema = Yup.object({
    email: Yup.string()
      .required('Email is Required')
      .email('Invalid email address *exemple@yyy.zzz'),
    password: Yup.string()
      .required('Password is required')
      .matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password must start with Capital Letter includes at least 5 and less than 10 chars'),
  });

  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <section className="login-sec">
        <form onSubmit={formik.handleSubmit} className="bg-white form-padding">


        <div className="login-img text-center">
            <ImageComp src={logo} />
        </div>
        
        {errMsg ? <div className='alert alert-danger'>{errMsg}</div> : null }

        <div className="form-floating my-4">
            <input
                type= 'email'
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

        <div className="form-floating my-4">
            <input
                type= 'text'
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


        <div className=' d-flex justify-content-between align-items-center mb-4'>
            <div className='d-flex align-items-center'>
                <input className='checkbox' type="checkbox" name='remember' value= 'value' id='remember' />
                <label className='mx-1' htmlFor="remember">Remember Me</label>
            </div>
            
            <ForgetPassword/>
        </div>
        
        {loading? <button className='btn bg-main text-white mt-1' type='button'> <ImSpinner10 className='spinner-rotate'/> </button> : 
        <button disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white mt-1' type='submit'>Login</button>}


        <div className='mt-3 text-center'>Do you have an account? <Link to= '/register' className='sign-color'>Sign Up</Link> </div>

        </form>
    </section>
  );
};

export default Login;



