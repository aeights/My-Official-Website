import React from 'react'

function NextButton(props) {
    const {title, icon} = props;
    return (
        <div>
            <img src={icon} alt="next" />
            <button type='button'>{title}</button>
        </div>
    )
}

export default NextButton