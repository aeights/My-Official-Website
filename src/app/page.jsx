import React from 'react'

function Home() {
    return (
        <>
            <section id='hero'>
                <div className='w-screen h-screen flex flex-row justify-center items-center'>
                    <div className='relative flex flex-col w-[300px] h-[350px] rounded-md mx-10'>
                        <div className='w-[250px] h-[330px] absolute left-4 bottom-2 rounded-md shadow-[3px_5px_10px_rgba(0,0,0,0.5)]'>
                            <img className='object-cover w-full h-full rounded-md' src="/assets/photo.jpg" />
                        </div>
                        <div className='bg-tertiary-base rounded-md p-2 absolute left-0 bottom-0 shadow-[3px_5px_10px_rgba(0,0,0,0.5)]'>
                            <span className='text-secondary-base font-semibold'>WEB DEVELOPER</span>
                        </div>
                    </div>
                    <div className='w-[500px] h-[500px] flex flex-col justify-center px-10 mx-10'>
                        <div className='mb-16'>
                            <p className='text-primary-base'>WELCOME TO MY WEBSITE</p>
                        </div>
                        <div className='mb-8'>
                            <p className='text-primary-base text-xl font-semibold'>HELLO!, MY NAME IS <span className='text-tertiary-base'>AFIF</span></p>
                            <p className='text-primary-base'>I'M A WEBSITE DEVELOPER</p>
                        </div>
                        <div className='mb-4'>
                            <p className='text-primary-base mb-4'>I'M A STUDENT AT UNIVERSITY OF JEMBER I MAJORED IN INFORMATICS AT FACULTY OF COMPUTER SCIENCE.</p>
                            <p className='text-primary-base'>I HAVE AN INTEREST IN SOFTWARE DEVELOPMENT, ESPECIALLY IN WEBSITE DEVELOPMENT.</p>
                        </div>
                        <div className='flex'>
                            <div className='mr-24'>
                                <p className='text-primary-base mb-2'>FIND WITH ME</p>
                                <ul className='flex'>
                                    <li>
                                        <a href="https://www.facebook.com/AeightS088" target='_blank'>
                                            <div className='p-2 rounded-md bg-secondary-base shadow-[3px_5px_10px_rgba(0,0,0,0.5)] hover:shadow-none duration-300'>
                                                <img className='w-10' src="/assets/icons/facebook.png" alt="facebook" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/muhammad_afif_ma.ruf" target='_blank'>
                                            <div className='p-2 rounded-md bg-secondary-base shadow-[3px_5px_10px_rgba(0,0,0,0.5)] hover:shadow-none duration-300 mx-2'>
                                                <img className='w-10' src="/assets/icons/instagram.png" alt="instagram" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/muhammad-afif-ma-ruf" target='_blank'>
                                            <div className='p-2 rounded-md bg-secondary-base shadow-[3px_5px_10px_rgba(0,0,0,0.5)] hover:shadow-none duration-300'>
                                                <img className='w-10' src="/assets/icons/linkedin.png" alt="linkedin" />
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <p className='text-primary-base mb-2'>BEST SKILL ON</p>
                                <ul className='flex'>
                                    <li>
                                        <a href="https://github.com/aeights" target='_blank'>
                                            <div className='p-2 rounded-md bg-secondary-base mr-2 shadow-[3px_5px_10px_rgba(0,0,0,0.5)] hover:shadow-none duration-300'>
                                                <img className='w-10' src="/assets/icons/github.png" alt="github" />
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/aeights" target='_blank'>
                                            <div className='p-2 rounded-md bg-secondary-base shadow-[3px_5px_10px_rgba(0,0,0,0.5)] hover:shadow-none duration-300'>
                                                <img className='w-10' src="/assets/icons/gitlab.png" alt="gitlab" />
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='skill'>
                <div className='w-screen flex flex-col items-center'>
                    <div className='w-[80%] text-center mb-8'>
                        <h1 className='text-5xl font-bold text-tertiary-base mb-12'>SKILLS</h1>
                        <p className='text-primary-base text-lg'>EXPLORE MY PROFICIENCY IN VARIOUS PROGRAMMING LANGUAGES, FRAMEWORKS, AND TOOLS. CHECK OUT THE SKILLS THAT POWER MY PROJECTS AND HELP ME EXCEL IN THE DIGITAL WORLD.</p>
                    </div>
                    <div>
                        <div className='flex flex-col items-center mb-8'>
                            <p className='mb-4 text-md text-primary-base'>LANGUAGE</p>
                            <ul className='flex justify-center'>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/python.png" alt="python" />
                                        <p className='text-xs text-primary-base'>PYTHON</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/java.png" alt="java" />
                                        <p className='text-xs text-primary-base'>JAVA</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/csharp.png" alt="csharp" />
                                        <p className='text-xs text-primary-base'>C#</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/cplusplus.png" alt="cplusplus" />
                                        <p className='text-xs text-primary-base'>C++</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/dart.png" alt="dart" />
                                        <p className='text-xs text-primary-base'>DART</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/php.png" alt="php" />
                                        <p className='text-xs text-primary-base'>PHP</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/javascript.png" alt="javascript" />
                                        <p className='text-xs text-primary-base'>JAVASCRIPT</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-center mb-8'>
                            <p className='mb-4 text-md text-primary-base'>FRAMEWORK</p>
                            <ul className='flex justify-center'>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/flask.png" alt="flask" />
                                        <p className='text-xs text-primary-base'>FLASK</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/laravel.png" alt="laravel" />
                                        <p className='text-xs text-primary-base'>LARAVEL</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/nextjs.png" alt="nextjs" />
                                        <p className='text-xs text-primary-base'>NEXT JS</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/flutter.png" alt="flutter" />
                                        <p className='text-xs text-primary-base'>FLUTTER</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/bootstrap.png" alt="bootstrap" />
                                        <p className='text-xs text-primary-base'>BOOTSTRAP</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/tailwind.png" alt="tailwind" />
                                        <p className='text-xs text-primary-base'>TAILWIND</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-center mb-8'>
                            <p className='mb-4 text-md text-primary-base'>TOOLS</p>
                            <ul className='flex justify-center'>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/vscode.png" alt="vscode" />
                                        <p className='text-xs text-primary-base'>VSCODE</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/visual-studio.png" alt="visual-studio" />
                                        <p className='text-xs text-primary-base'>VISUAL STUDIO</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/git.png" alt="git" />
                                        <p className='text-xs text-primary-base'>GIT</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/postman.png" alt="postman" />
                                        <p className='text-xs text-primary-base'>POSTMAN</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/putty.png" alt="putty" />
                                        <p className='text-xs text-primary-base'>PUTTY</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home