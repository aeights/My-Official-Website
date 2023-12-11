"use client"

import SkillComponent from '@/components/SkillComponent'
import { useState } from 'react'


function Home() {
    const [currentValue, setCurrentValue] = useState(1);

    const next = () => {
    setCurrentValue(currentValue + 1);
    };

    const previous = () => {
    setCurrentValue(currentValue - 1);
    };

    return (
        <>
            <section id='hero'>
                <div className='w-full h-screen flex flex-row justify-center items-center'>
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

            <section id='skill' className='mb-16'>
                <div className='flex flex-col items-center'>
                    <div className='w-[80%] text-center mb-8'>
                        <h1 className='text-5xl font-bold text-tertiary-base mb-12'>SKILLS</h1>
                        <p className='text-primary-base text-lg'>EXPLORE MY PROFICIENCY IN VARIOUS PROGRAMMING LANGUAGES, FRAMEWORKS, AND TOOLS. CHECK OUT THE SKILLS THAT POWER MY PROJECTS AND HELP ME EXCEL IN THE DIGITAL WORLD.</p>
                    </div>
                    <div>
                        <div className='flex flex-col items-center mb-8'>
                            <p className='mb-4 text-md text-primary-base'>LANGUAGE</p>
                            <ul className='flex justify-center'>
                                <li>
                                    {/* <div className='w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                        <img className='h-10' src="/assets/icons/python.png" alt="python" />
                                        <p className='text-xs text-primary-base'>PYTHON</p>
                                    </div> */}
                                    <SkillComponent imageUrl={"/assets/icons/python.png"} imageAlt={"python"} imageTitle={"PYTHON"}></SkillComponent>
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

            <section id='experience' className='mb-16'>
                <div>
                    <div className='text-center mb-8'>
                        <h1 className='text-5xl font-bold text-tertiary-base mb-12'>EXPERIENCE</h1>
                    </div>
                    <div className='flex justify-center items-center mb-16'>
                        <div className='w-[400px] mr-4'>
                            <img className='w-full' src="/assets/experience/ads.png" alt="PT Adma Digital Solusi" />
                        </div>
                        <div className='w-[500px]'>
                            <div className='mb-4'>
                                <p className='text-primary-base text-xl font-semibold mb-4'>PT ADMA DIGITAL SOLUSI</p>
                                <p className='text-tertiary-base text-lg'>SURABAYA, INDONESIA</p>
                            </div>
                            <div className='text-sm'>
                                <p className='text-primary-base mb-2 text-justify'>ADS Digital Partner (PT Adma Digital Solusi) is an IT consulting company that was founded in 2019 based in Jakarta, Surabaya and Bandung. I'm here as a backend engineer with several duties including:</p>
                                <ul className='text-primary-base ml-5 text-justify' style={{ listStyleType: 'disc' }}>
                                    <li>Create an influencer search platform (Find Fluence).</li>
                                    <li>Designing databases, and creating APIs.</li>
                                    <li>Deploying and maintaining website on server.</li>
                                    <li>Application integration with APIs such as TikTok, Youtube, Instagram.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='w-[400px] mr-4'>
                            <img className='w-full' src="/assets/experience/telkom.png" alt="Telkom Access Jember" />
                        </div>
                        <div className='w-[500px]'>
                            <div className='mb-4'>
                                <p className='text-primary-base text-xl font-semibold mb-4'>TELKOM ACCESS JEMBER</p>
                                <p className='text-tertiary-base text-lg'>JEMBER, INDONESIA</p>
                            </div>
                            <div className='text-sm'>
                                <p className='text-primary-base mb-2 text-justify'>Telkom Access is a subsidiary of PT Telkom Indonesia Tbk and was founded on December 12 2012. I work here in the Access and Service Operation (ASO) Unit, with several tasks including:</p>
                                <ul className='text-primary-base text-justify' style={{ listStyleType: 'disc', paddingLeft: '1.25rem' }}>
                                    <li>Serving customers in the customer service department.</li>
                                    <li>Responsible for handling disturbances or trouble shooting experienced by customers.</li>
                                    <li>Coordinate with field technicians to address customer troubleshooting.</li>
                                    <li>Network maintenance, especially for ODP in each sub-district.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='project'>
                <div className='pb-10'>
                    <div className='text-center mb-8'>
                        <h1 className='text-5xl font-bold text-tertiary-base mb-12'>PROJECT</h1>
                    </div>
                    <div className={`justify-center items-center ${(currentValue == 1 ? 'flex':'hidden')}`}>
                        <div className='w-[400px] mr-4'>
                            <img className='w-full' src="/assets/project/findfluence.png" alt="PT Adma Digital Solusi" />
                        </div>
                        <div className='w-[500px]'>
                            <div className='mb-4'>
                                <p className='text-primary-base text-xl font-semibold mb-4'>FIND FLUENCE</p>
                                <p className='text-tertiary-base text-md mb-4'>BACKEND ENGINEER</p>
                                <div className='flex items-center'>
                                    <p className='text-primary-base text-md mr-2'>STACKS</p>
                                    <div className='flex '>
                                        <div className='w-10 h-10 p-1 mx-1 rounded-md bg-quinary-base flex items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                            <img src="/assets/icons/laravel.png" alt="laravel" />
                                        </div>
                                        <div className='w-10 h-10 p-1 mx-1 rounded-md bg-quinary-base flex items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                            <img src="/assets/icons/bootstrap.png" alt="bootstrap" />
                                        </div>
                                        <div className='w-10 h-10 p-1 mx-1 rounded-md bg-quinary-base flex items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                            <img src="/assets/icons/mysql.png" alt="mysql" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-sm'>
                                <p className='text-primary-base mb-2 text-justify'>Findfluence is a platform that makes it easy for brands to find suitable influencers to promote their products. Find fluence is integrated directly with Tiktok, Youtube, and Instagram (soon), to make it easier for influencers to connect their social media. Here are some of my tasks:</p>
                                <ul className='text-primary-base ml-5 text-justify' style={{ listStyleType: 'disc' }}>
                                    <li>Designing database.</li>
                                    <li>Create application flows, diagrams and integration.</li>
                                    <li>Application integration with APIs such as TikTok, Youtube, Instagram.</li>
                                    <li>Configure payments for applications.</li>
                                    <li>Deploying and maintaining website on server.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`justify-center items-center ${(currentValue == 2 ? 'flex':'hidden')}`}>
                        <div className='w-[400px] mr-4'>
                            <img className='w-full' src="/assets/project/findfluence.png" alt="PT Adma Digital Solusi" />
                        </div>
                        <div className='w-[500px]'>
                            <div className='mb-4'>
                                <p className='text-primary-base text-xl font-semibold mb-4'>FIND</p>
                                <p className='text-tertiary-base text-md mb-4'>BACKEND ENGINEER</p>
                                <div className='flex items-center'>
                                    <p className='text-primary-base text-md mr-2'>STACKS</p>
                                    <div className='flex '>
                                        <div className='w-10 h-10 p-1 mx-1 rounded-md bg-quinary-base flex items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                            <img src="/assets/icons/laravel.png" alt="laravel" />
                                        </div>
                                        <div className='w-10 h-10 p-1 mx-1 rounded-md bg-quinary-base flex items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                            <img src="/assets/icons/bootstrap.png" alt="bootstrap" />
                                        </div>
                                        <div className='w-10 h-10 p-1 mx-1 rounded-md bg-quinary-base flex items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                            <img src="/assets/icons/mysql.png" alt="mysql" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-sm'>
                                <p className='text-primary-base mb-2 text-justify'>Findfluence is a platform that makes it easy for brands to find suitable influencers to promote their products. Find fluence is integrated directly with Tiktok, Youtube, and Instagram (soon), to make it easier for influencers to connect their social media. Here are some of my tasks:</p>
                                <ul className='text-primary-base ml-5 text-justify' style={{ listStyleType: 'disc' }}>
                                    <li>Designing database.</li>
                                    <li>Create application flows, diagrams and integration.</li>
                                    <li>Application integration with APIs such as TikTok, Youtube, Instagram.</li>
                                    <li>Configure payments for applications.</li>
                                    <li>Deploying and maintaining website on server.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`justify-center items-center ${(currentValue == 3 ? 'flex':'hidden')}`}>
                        <div className='w-[400px] mr-4'>
                            <img className='w-full' src="/assets/project/findfluence.png" alt="PT Adma Digital Solusi" />
                        </div>
                        <div className='w-[500px]'>
                            <div className='mb-4'>
                                <p className='text-primary-base text-xl font-semibold mb-4'>FIND FLUENCE 3</p>
                                <p className='text-tertiary-base text-md mb-4'>BACKEND ENGINEER</p>
                                <div className='flex items-center'>
                                    <p className='text-primary-base text-md mr-2'>STACKS</p>
                                    <div className='flex '>
                                        <div className='w-10 h-10 p-1 mx-1 rounded-md bg-quinary-base flex items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                            <img src="/assets/icons/laravel.png" alt="laravel" />
                                        </div>
                                        <div className='w-10 h-10 p-1 mx-1 rounded-md bg-quinary-base flex items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                            <img src="/assets/icons/bootstrap.png" alt="bootstrap" />
                                        </div>
                                        <div className='w-10 h-10 p-1 mx-1 rounded-md bg-quinary-base flex items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>
                                            <img src="/assets/icons/mysql.png" alt="mysql" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-sm'>
                                <p className='text-primary-base mb-2 text-justify'>Findfluence is a platform that makes it easy for brands to find suitable influencers to promote their products. Find fluence is integrated directly with Tiktok, Youtube, and Instagram (soon), to make it easier for influencers to connect their social media. Here are some of my tasks:</p>
                                <ul className='text-primary-base ml-5 text-justify' style={{ listStyleType: 'disc' }}>
                                    <li>Designing database.</li>
                                    <li>Create application flows, diagrams and integration.</li>
                                    <li>Application integration with APIs such as TikTok, Youtube, Instagram.</li>
                                    <li>Configure payments for applications.</li>
                                    <li>Deploying and maintaining website on server.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center gap-8'>
                        <div onClick={previous} className={`${(currentValue == 1) ? 'hidden' : 'flex'} justify-center items-center gap-2 mt-8 cursor-pointer hover:transform hover:scale-105 duration-300`}>
                            <img className='w-6 h-6 transform -scale-x-100' src="/assets/icons/arrow.png" alt="previous" />
                            <button className='text-primary-base text-2xl' type='button'>PREVIOUS</button>
                        </div>
                        <div onClick={next} className={`${(currentValue == 3) ? 'hidden' : 'flex'} justify-center items-center gap-2 mt-8 cursor-pointer hover:transform hover:scale-105 duration-300`}>
                            <button className='text-primary-base text-2xl' type='button'>NEXT</button>
                            <img className='w-6 h-6' src="/assets/icons/arrow.png" alt="next" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home