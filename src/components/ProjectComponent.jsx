import React from 'react'
import StackComponent from './StackComponent'

function ProjectComponent({state, src, alt, title, role, stackSrc, stackAlt, body, tasks}) {
    return (
        <div className={`justify-center items-center gap-4 ${state}`}>
            <div className='w-[350px] mr-4'>
                <img className='w-full' src={src} alt={alt} />
            </div>
            <div className='w-[500px]'>
                <div className='mb-4'>
                    <p className='text-primary-base text-xl font-semibold mb-4'>{title}</p>
                    <p className='text-tertiary-base text-md mb-4'>{role}</p>
                    <div className='flex items-center'>
                        <p className='text-primary-base text-md mr-2'>STACKS</p>
                        <div className='flex '>
                            {stackSrc.map((src, index) => (
                                <StackComponent key={index} src={src} alt={stackAlt[index]} />
                            ))}
                        </div>
                    </div>
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

export default ProjectComponent