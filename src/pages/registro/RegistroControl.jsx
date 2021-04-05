import React from 'react'
import Input from './elements/Input';
import Radio from './elements/Radio';
import Select from './elements/Select';

function RegistroControl(props) {
    
    const {control, ...rest} = props;

    switch (control) {
        case 'input':
           return <Input {...rest}/>
        case 'select':
            return <Select {...rest}/>
        case 'radio':
            return <Radio {...rest}/>
        case 'checkbox':
        default:
            return null
    }
}

export default RegistroControl
