import { Tooltip } from 'bootstrap'
import React from 'react'
import { Overlay, OverlayTrigger } from 'react-bootstrap'

function RegularTooltip({id, text, placement, show, children }) {
    return (
    <OverlayTrigger 
                    placement={placement}
                    overlay={
                    <Tooltip id={id}>
                        {text}
                    </Tooltip>
                    }>
        {children}
      </OverlayTrigger>
    )
}

export default RegularTooltip
