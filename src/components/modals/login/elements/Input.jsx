import React from 'react'
import {Field} from 'formik'

function Input(props) {
    const {label, name, placeholder, aria,classInput, classContainer, ...rest} = props
    return (
    <div className={classContainer}>
        <label htmlFor={name}>{label}</label>
        <Field  id={name} 
                name={name} 
                placeholder={placeholder}
                className={classInput}
                required {...rest}
                aria-describedby={aria}/>
    </div>
    )
}

export default Input
