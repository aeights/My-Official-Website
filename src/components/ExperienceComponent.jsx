import React from 'react'

function ExperienceComponent({ src, alt, title, location, body, tasks }) {
    return (
        <div className='flex justify-center items-center mb-16'>
            <div className='w-[400px] mr-4'>
                <img className='w-full' src={src} alt={alt} />
            </div>
            <div className='w-[500px]'>
                <div className='mb-4'>
                    <p className='text-primary-base text-xl font-semibold mb-4'>{title}</p>
                    <p className='text-tertiary-base text-lg'>{location}</p>
                </div>
                <div className='text-sm'>
                    <p className='text-primary-base mb-2 text-justify'>{body}</p>
                    <ul className='text-primary-base ml-5 text-justify' style={{ listStyleType: 'disc' }}>
                        {tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperienceComponent