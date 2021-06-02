import React from 'react'

function Label({ children, ...others }) {
    return (
        <label {...others}
            className="text-base font-medium block mb-4"
        >{children}</label>
    )
}

export default Label
