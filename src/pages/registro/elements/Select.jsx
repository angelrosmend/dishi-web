import { ErrorMessage, Field } from 'formik'
import React from 'react'
import ErrorText from './ErrorText'

function Select(props) {
    const {label, name, options, classContainer, classSelect, ...rest} = props
    return (
        <div className={classContainer}>
            <Field as='select' 
                  id={name} 
                  name={name}
                  className={classSelect} 
                  {...rest}>
                {
                    options.map( option => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.key}
                            </option>
                        )
                        })
                }
            </Field>
            <ErrorMessage name={name} component={ErrorText}/>
        </div>
    )
}

export default Select
