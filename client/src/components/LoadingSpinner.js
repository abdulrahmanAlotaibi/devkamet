import React from 'react'
import { ImSpinner2 } from "react-icons/im"

function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center h-full w-full P-10">
            <ImSpinner2 className="animate-spin  text-white text-3xl h-30 w-30" style={{
                fontSize:"3rem"
            }} />
        </div>
        
    )
}

export default LoadingSpinner
