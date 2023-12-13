import React from 'react'

function PreviousButton({icon, title}) {
    return (
        <div>
            <img src={icon} alt="previous" />
            <button type='button'>{title}</button>
        </div>
    )
}

export default PreviousButton