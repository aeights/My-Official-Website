import React from 'react'

function PreviousButton(props) {
    const {title, icon} = props;
    return (
        <div>
            <img src={icon} alt="previous" />
            <button type='button'>{title}</button>
        </div>
    )
}

export default PreviousButton