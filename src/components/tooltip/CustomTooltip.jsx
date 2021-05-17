import React from 'react'
import {Overlay} from "react-bootstrap"

function CustomTooltip({text, target, show, placement, children, reversed}) {
    return (
        <Overlay target={target.current} show={show} placement={placement}>
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: '#82b4ef',
              padding: '2px 10px',
              marginRight: "10px",
              color: 'white',
              fontSize: "0.8rem",
              fontWeight:"bold",
              borderRadius: "20px",
              ...props.style,
            }}>
            {children}
          </div>
        )}
      </Overlay>
    )
}

export default CustomTooltip
