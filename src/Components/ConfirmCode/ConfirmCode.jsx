import React, { useState } from 'react'
import { useFormik } from 'formik'
import {ImSpinner10} from 'react-icons/im'
import rightLogo from '../../assests/Register/right.png'
import './ConfirmCode.css'
const ConfirmCode = ({loading, setLoading}) => {

  const [errReset, seterrReset] = useState(null)
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

  return (
  <div>
    
    <form className='m-0' onSubmit={(e)=> e.preventDefault()}>
      <button 
        type='submit'
        className="btn modal-btn"
        data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
              Confirm
      </button>
    </form>

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

    <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabIndex="-1">
        
        <div className="modal-dialog modal-dialog-centered">

            {/* Modal Content */}
            <div className="modal-content p-5">
                <div className="modal-header text-center p-0">
                    <h1 className="modal-title" id="exampleModalToggleLabel3">Email has been confirmed successfully</h1>
                    <img className='right-img my-4' src= {rightLogo} alt="" />

                </div>


                <div class="modal-footer p-0 text-center d-block">
                    {/* <form className='m-0' onSubmit={(e)=> e.preventDefault()}>
                    <button 
                        type='submit'
                        className="btn modal-btn"
                        data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                        Confirm
                    </button>
                    </form> */}
                    
                </div>

                

            </div>

        </div>

    </div>
  </div>
  )
}

export default ConfirmCode


