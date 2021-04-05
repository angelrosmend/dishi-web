import React from 'react'
import Input from './elements/Input';


function LoginControl(props) {
    
    const {control, ...rest} = props;

    switch (control) {
        case 'input':
           return <Input {...rest}/>
        case 'select':
        case 'radio':
        case 'checkbox':
        default:
            return null
    }
}

export default LoginControl
