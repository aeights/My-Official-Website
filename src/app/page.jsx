"use client"

import ExperienceComponent from '@/components/ExperienceComponent';
import ProjectComponent from '@/components/ProjectComponent';
import SkillComponent from '@/components/SkillComponent'
import { useState } from 'react'


function Home() {
    const [currentValue, setCurrentValue] = useState(0);

    const next = () => {
        setCurrentValue(currentValue + 1);
    };

    const previous = () => {
        setCurrentValue(currentValue - 1);
    };

    const experience = {
        src: [
            '/assets/experience/ads.png', '/assets/experience/telkom.png'
        ],
        alt: [
            'PT Adma Digital Solusi', 'Telkom Access Jember'
        ],
        title: [
            'PT ADMA DIGITAL SOLUSI', 'TELKOM ACCESS JEMBER'
        ],
        location: [
            'SURABAYA, INDONESIA', 'JEMBER, INDONESIA'
        ],
        body: [
            "ADS Digital Partner (PT Adma Digital Solusi) is an IT consulting company that was founded in 2019 based in Jakarta, Surabaya and Bandung. I'm here as a backend engineer with several duties including:",
            "Telkom Access is a subsidiary of PT Telkom Indonesia Tbk and was founded on December 12 2012. I work here in the Access and Service Operation (ASO) Unit, with several tasks including:"
        ],
        tasks: [
            [
                "Create an influencer search platform (Find Fluence).",
                "Designing databases, and creating APIs.",
                "Deploying and maintaining website on server.",
                "Application integration with APIs such as TikTok, Youtube, Instagram.",
            ],
            [
                "Serving customers in the customer service department.",
                "Responsible for handling disturbances or trouble shooting experienced by customers.",
                "Coordinate with field technicians to address customer troubleshooting.",
                "Network maintenance, especially for ODP in each sub-district.",
            ]
        ]
    };

    const project = {
        src: [
            "/assets/project/findfluence.png",
        ],
        alt: [
            "PT Adma Digital Solusi",
        ],
        title: [
            "FIND FLUENCE",
        ],
        role: [
            "BACKEND ENGINEER",
        ],
        stackSrc: [
            [
                "/assets/icons/laravel.png", "/assets/icons/bootstrap.png", "/assets/icons/mysql.png"
            ],
        ],
        stackAlt: [
            [
                "laravel", "bootstrap", "mysql"
            ],
        ],
        body: [
            "Findfluence is a platform that makes it easy for brands to find suitable influencers to promote their products. Find fluence is integrated directly with Tiktok, Youtube, and Instagram (soon), to make it easier for influencers to connect their social media. Here are some of my tasks:",
        ],
        tasks: [
            [
                "Designing database.",
                "Create application flows, diagrams and integration.",
                "Application integration with APIs such as TikTok, Youtube, Instagram.",
                "Configure payments for applications.",
                "Deploying and maintaining website on server.",
            ],
        ],
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
                                    <SkillComponent src={"/assets/icons/python.png"} alt={"python"} title={"PYTHON"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/java.png"} alt={"java"} title={"JAVA"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/csharp.png"} alt={"csharp"} title={"C#"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/cplusplus.png"} alt={"cplusplus"} title={"C++"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/dart.png"} alt={"dart"} title={"DART"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/php.png"} alt={"php"} title={"PHP"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/javascript.png"} alt={"javascript"} title={"JAVASCRIPT"} />
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-center mb-8'>
                            <p className='mb-4 text-md text-primary-base'>FRAMEWORK</p>
                            <ul className='flex justify-center'>
                                <li>
                                    <SkillComponent src={"/assets/icons/flask.png"} alt={"flask"} title={"FLASK"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/laravel.png"} alt={"laravel"} title={"LARAVEL"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/nextjs.png"} alt={"nextjs"} title={"NEXT JS"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/flutter.png"} alt={"flutter"} title={"FLUTTER"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/bootstrap.png"} alt={"bootstrap"} title={"BOOTSTRAP"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/tailwind.png"} alt={"tailwind"} title={"TAILWIND"} />
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-center mb-8'>
                            <p className='mb-4 text-md text-primary-base'>TOOLS</p>
                            <ul className='flex justify-center'>
                                <li>
                                    <SkillComponent src={"/assets/icons/vscode.png"} alt={"vscode"} title={"VSCODE"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/visual-studio.png"} alt={"visual-studio"} title={"VISUAL STUDIO"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/git.png"} alt={"git"} title={"GIT"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/postman.png"} alt={"postman"} title={"POSTMAN"} />
                                </li>
                                <li>
                                    <SkillComponent src={"/assets/icons/putty.png"} alt={"putty"} title={"PUTTY"} />
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
                    {experience.src.map((src, index) => (
                        <ExperienceComponent
                            key={index}
                            src={src}
                            alt={experience.alt[index]}
                            title={experience.title[index]}
                            location={experience.location[index]}
                            body={experience.body[index]}
                            tasks={experience.tasks[index]}
                        />
                    ))}
                </div>
            </section>

            <section id='project'>
                <div className='pb-10'>
                    <div className='text-center mb-8'>
                        <h1 className='text-5xl font-bold text-tertiary-base mb-12'>PROJECT</h1>
                    </div>
                    {project.src.map((src, index) => (
                        <ProjectComponent
                            key={index}
                            state={(currentValue == index) ? 'flex' : 'hidden'}
                            src={src}
                            alt={project.alt[index]}
                            title={project.title[index]}
                            role={project.role[index]}
                            stackSrc={project.stackSrc[index]}
                            stackAlt={project.stackAlt[index]}
                            body={project.body[index]}
                            tasks={project.tasks[index]}
                        />
                    ))}
                    {/* <div className={`justify-center items-center ${(currentValue == 1 ? 'flex' : 'hidden')}`}>
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
                    <div className={`justify-center items-center ${(currentValue == 2 ? 'flex' : 'hidden')}`}>
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
                    <div className={`justify-center items-center ${(currentValue == 3 ? 'flex' : 'hidden')}`}>
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
                    </div> */}
                    <div className='flex justify-center gap-8'>
                        <div onClick={previous} className={`${(currentValue == 0) ? 'hidden' : 'flex'} justify-center items-center gap-2 mt-8 cursor-pointer hover:transform hover:scale-105 duration-300`}>
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