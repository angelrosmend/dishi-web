import React from 'react'

function ErrorText(props) {
    return (
        <div className="error-message">
            {props.children}
        </div>
    )
}

export default ErrorText
