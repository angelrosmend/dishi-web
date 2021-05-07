import React from 'react'

export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "#056ae0" }}
        onClick={onClick}
      />
    )
}

export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "#056ae0"}}
        onClick={onClick}
      />
    )
}
