import React from 'react'
import { useOutletContext } from 'react-router-dom'
function Remarks() {
    const {remarks} = useOutletContext()
    return (
        <div>{remarks}</div>
    )
}

export default Remarks