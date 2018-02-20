import React from 'react'

const Button = ({ onClick, label }) => {
    return(
        <button onClick={onClick}>{label}</button>
    )
}

Button.propTypes = {
    label = PropTypes.String.isRequired,
    onClick = PropTypes.func.isRequired
}

export default Button