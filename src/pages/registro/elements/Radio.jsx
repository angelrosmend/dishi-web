import React from 'react'
import { ErrorMessage, Field} from 'formik'
import { Fragment } from 'react'
import ErrorText from './ErrorText'

function Radio(props) {
  const { label, name, options, oneLine,...rest } = props
  return (
    <Fragment>
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
                <div className={`col-md-4 ml-1 checks`} key={option.key}>
                <input  className={`form-check-input `}
                        type='radio'
                        name={name}
                        id={option.value}
                        {...field}
                        {...rest}
                        value={option.value}
                        checked={field.value === option.value}
                />
                <label className={`form-check-label ${oneLine}`} htmlFor={option.value}>{option.key}</label>
                <ErrorMessage name={name} component={ErrorText}/>
            </div>
            )
          })
        }}
      </Field>
    </Fragment>
  )
}

export default Radio