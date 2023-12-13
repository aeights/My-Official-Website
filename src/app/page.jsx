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
            "/assets/project/makeupartist.png",
            "/assets/project/byteglobe.png",
            "/assets/project/gotravel.png",
            "/assets/project/milkyway.png",
        ],
        alt: [
            "Find Fluence",
            "Make Up Artist",
            "Byte Globe",
            "Go Travel",
            "Milky Way",
        ],
        title: [
            "FIND FLUENCE",
            "MAKE UP ARTIST",
            "BYTE GLOBE",
            "GO TRAVEL",
            "MILKY WAY",
        ],
        role: [
            "BACKEND ENGINEER",
            "FULLSTACK DEVELOPER",
            "FULLSTACK DEVELOPER",
            "FULLSTACK DEVELOPER",
            "FULLSTACK DEVELOPER",
        ],
        stackSrc: [
            [
                "/assets/icons/laravel.png", "/assets/icons/bootstrap.png", "/assets/icons/mysql.png"
            ],
            [
                "/assets/icons/laravel.png", "/assets/icons/bootstrap.png", "/assets/icons/mysql.png"
            ],
            [
                "/assets/icons/laravel.png", "/assets/icons/bootstrap.png", "/assets/icons/mysql.png"
            ],
            [
                "/assets/icons/laravel.png", "/assets/icons/bootstrap.png", "/assets/icons/mysql.png"
            ],
            [
                "/assets/icons/laravel.png", "/assets/icons/tailwind.png", "/assets/icons/mysql.png"
            ],
        ],
        stackAlt: [
            [
                "laravel", "bootstrap", "mysql"
            ],
            [
                "laravel", "bootstrap", "mysql"
            ],
            [
                "laravel", "bootstrap", "mysql"
            ],
            [
                "laravel", "bootstrap", "mysql"
            ],
            [
                "laravel", "tailwind", "mysql"
            ],
        ],
        body: [
            "Findfluence is a platform that makes it easy for brands to find suitable influencers to promote their products. Find fluence is integrated directly with Tiktok, Youtube, and Instagram (soon), to make it easier for influencers to connect their social media. Here are some of my tasks:",
            "“Make Up Artist” is a website for making appointments with make up artists. Customers can CRUD appointments, make payments and adding testimonial for service. And admins can manage about us, service, payment method, appointments and verify payments. This is my customer's website. Here are some of my tasks:",
            "Byte Globe is a simple blog website. Users can make posts and they will be reviewed by the admin. This website is the final assignment for the Website Based Programming (PBW) course and received an 'A' grade. Here are some of my tasks:",
            "Go Travel is a simple blog website that contains travel information. Admins can manage tourist information, and users can read articles and save to favorites. Here are some of my tasks:",
            "Milky Way is an e-commerce website, especially dairy products. Sellers can add items, shipping, withdrawals etc. Buyers can purchase products. And the admin is the mediator between sellers and buyers, such as verifying transactions. This website is the final assignment for the Pengembangan Perangkat Lunak (PPL), and Analisis Desain Perangkat Lunak (ADPL) course and received an 'A' grade for PPL and 'AB' for ADPL. Here are some of my tasks:",
        ],
        tasks: [
            [
                "Designing database.",
                "Create application flows, diagrams and integration.",
                "Application integration with APIs such as TikTok, Youtube, Instagram.",
                "Configure payments for applications.",
                "Deploying and maintaining website on server.",
            ],
            [
                "Gathering customer requirements",
                "Designing database.",
                "Create application flows, logic and UI integration.",
                "Configure simple payments for customer.",
            ],
            [
                "Determine application features and requirements.",
                "Designing database.",
                "Create application flows and logic.",
                "UI integration.",
            ],
            [
                "Gathering customer requirements.",
                "Designing database.",
                "Create application flows and logic.",
                "UI integration.",
            ],
            [
                "Define application features, and create several types of diagrams",
                "Slicing design to UI.",
                "Designing database.",
                "Create application flows, logic and UI integration.",
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
                            <span className='text-secondary-base font-semibold'>FULLSTACK DEVELOPER</span>
                        </div>
                    </div>
                    <div className='w-[500px] h-[500px] flex flex-col justify-center px-10 mx-10'>
                        <div className='mb-16'>
                            <p className='text-primary-base'>WELCOME TO MY WEBSITE</p>
                        </div>
                        <div className='mb-8'>
                            <p className='text-primary-base text-xl font-semibold'>HELLO!, MY NAME IS <span className='text-tertiary-base'>AFIF</span></p>
                            <p className='text-primary-base'>I'M A FULLSTACK DEVELOPER</p>
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

            <section id='skill' className='mb-24'>
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

            <section id='experience' className='mb-24'>
                <div>
                    <div className='text-center mb-12'>
                        <h1 className='text-5xl font-bold text-tertiary-base'>EXPERIENCE</h1>
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

            <section id='project' className='mb-24'>
                <div className=''>
                    <div className='text-center mb-12'>
                        <h1 className='text-5xl font-bold text-tertiary-base'>PROJECT</h1>
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
                    <div className='flex justify-center gap-8'>
                        <div onClick={previous} className={`${(currentValue == 0) ? 'hidden' : 'flex'} justify-center items-center gap-2 mt-8 cursor-pointer hover:transform hover:scale-105 duration-300`}>
                            <img className='w-6 h-6 transform -scale-x-100' src="/assets/icons/arrow.png" alt="previous" />
                            <button className='text-primary-base text-2xl' type='button'>PREVIOUS</button>
                        </div>
                        <div onClick={next} className={`${(currentValue == project.src.length - 1) ? 'hidden' : 'flex'} justify-center items-center gap-2 mt-8 cursor-pointer hover:transform hover:scale-105 duration-300`}>
                            <button className='text-primary-base text-2xl' type='button'>NEXT</button>
                            <img className='w-6 h-6' src="/assets/icons/arrow.png" alt="next" />
                        </div>
                    </div>
                </div>
            </section>

            <section id='contact'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-center mb-12'>
                        <h1 className='text-5xl font-bold text-tertiary-base'>CONTACT</h1>
                    </div>
                    <form className='w-[30%] flex flex-col ' action="">
                        <div className='flex flex-col mb-4'>
                            <p className='text-primary-base text-xl mb-2'>NAME</p>
                            <input className='bg-quinary-base py-3 px-4 rounded outline-none focus:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-200 text-sm text-white' type="text" name='name' placeholder='my name' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <p className='text-primary-base text-xl mb-2'>EMAIL</p>
                            <input className='bg-quinary-base py-3 px-4 rounded outline-none focus:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-200 text-sm text-white' type="text" name='email' placeholder='myemail@mail.com' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <p className='text-primary-base text-xl mb-2'>MESSAGE</p>
                            <textarea style={{ resize:"none" }} className='bg-quinary-base py-3 px-4 rounded outline-none focus:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-200 text-sm text-white' name="message" rows="5" placeholder='send me a message'></textarea>
                        </div>
                        <button className='px-4 py-3 bg-quinary-base text-primary-base text-xl font-semibold rounded hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300'>SEND</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Home