import React from 'react'

function StackComponent({src, alt}) {
    return (
        <div className='w-10 h-10 p-1 mx-1 rounded-md bg-quinary-base flex items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
            <img src={src} alt={alt} />
        </div>
    )
}

export default StackComponent