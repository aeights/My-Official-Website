import React from 'react'

function NextButton({icon, title}) {
    return (
        <div>
            <img src={icon} alt="next" />
            <button type='button'>{title}</button>
        </div>
    )
}

export default NextButton