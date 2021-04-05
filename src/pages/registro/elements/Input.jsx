import React from 'react'
import {ErrorMessage, Field} from 'formik'
import ErrorText from './ErrorText'

function Input(props) {
    const {label, name, placeholder, classInput, classContainer, ...rest} = props
    return (
    <div className={classContainer}>
        <label htmlFor={name}>{label}</label>
        <Field  id={name} 
                name={name} 
                placeholder={placeholder}
                className={classInput}
                {...rest}/>
        <ErrorMessage name={name} component={ErrorText}/>
    </div>
    )
}

export default Input
