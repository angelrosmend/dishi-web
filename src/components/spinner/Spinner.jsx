import React from 'react'
import { Spinner } from 'reactstrap'



function CustomSpinner() {
    return <Spinner style={{ position: 'absolute', width: '3rem', height: '3rem', top: '50%', left: '50%' }} color='primary'/>
}

export default CustomSpinner
