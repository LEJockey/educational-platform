import React from 'react'
import './InputField.css'
import useLangContext from './../../Hooks/useLangContext';


const InputField = ({inputType, inputName, onChange, onBlur, value}) => {


    const {lang, langs} = useLangContext()

    
return (
    <>
    <div className="form-floating my-4">
        <input
            type={inputType}
            className= 'form-control'
            id={`floating${inputName}`}
            
            // value={value}
            
            required
        />
        {/* Label */}
        <label
            className={`mx-2 ${lang === 'ar' ? ' end-0' : 'start-0'}`}
            htmlFor={`floating${inputName}`}
        >
            {langs[lang].ContactForm[inputName]}
        </label>
    </div>
        {/* {formik.errors[inputName.toLowerCase()] && formik.touched[inputName.toLowerCase()] ? (
    <div className="alert alert-danger">{formik.errors[inputName.toLowerCase()]}</div>
    ) : null} */}
    </>
    )
}

export default InputField



