import React from 'react'

function Popper({ children, direction = "left", top = 16, width="w-64" }) {

    return (
        <ul className={`p-4 block bg-gray-900 rounded-md shadow-2xl border-2 border-gray-800
        text-center  z-50  absolute top-${top}  ${direction}-0 min-${width} ${width}`}
            id="pop">
            {children}
        </ul>
    )
}

export default Popper
