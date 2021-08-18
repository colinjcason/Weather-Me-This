import React from 'react'

const Button = ({ children, onClick, ...otherProps }) => {
    return (
        <button onClick={onClick} {...otherProps}>
            {children}
        </button>
        
    )
}

export default Button
