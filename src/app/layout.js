import { Poppins } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import Script from 'next/script'
import NavbarComponent from '@/components/NavbarComponent';

const poppins = Poppins({ weight: '400', style: 'normal', subsets: ['latin'] });

export const metadata = {
	title: "Muhammad Afif Ma'ruf",
	description: "Muhammad Afif Ma'ruf Portfolio Website",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<NavbarComponent />

				<main className='bg-secondary-base pb-12'>
					{children}
				</main>

				<footer>
					<div className='bg-quinary-base'>
						<div className='flex justify-center items-center gap-44 p-8'>
							<div className='flex flex-col'>
								<Link href={"/"} className="flex items-center mb-2">
									<span className="self-center text-2xl whitespace-nowrap text-primary-base">MUHAMMAD <span className='text-tertiary-base'>AFIF MA</span>'RUF</span>
								</Link>
								<p className='text-primary-base text-sm'>This website was created with Next JS and Tailwind CSS</p>
							</div>
							<div className='flex gap-36'>
								<div>
									<p className='text-tertiary-base text-xl mb-4'>CONNECT WITH ME</p>
									<ul className='flex flex-col gap-2'>
										<li>
											<a className='flex gap-2' href="https://www.instagram.com/muhammad_afif_ma.ruf/" target='_blank'>
												<span><i class="fa-brands fa-instagram" style={{ color:"#272829;" }}></i></span>
												<p className='text-primary-base text-sm hover:text-tertiary-base duration-300'>@muhammad_afif_ma.ruf</p>
											</a>
										</li>
										<li>
											<a className='flex gap-2' href="https://www.facebook.com/AeightS088" target='_blank'>
												<span><i class="fa-brands fa-facebook" style={{ color:"#272829;" }}></i></span>
												<p className='text-primary-base text-sm hover:text-tertiary-base duration-300'>Muhammad Afif Ma'ruf</p>
											</a>
										</li>
										<li>
											<a className='flex gap-2' href="https://www.linkedin.com/in/muhammad-afif-ma-ruf/" target='_blank'>
												<span><i class="fa-brands fa-linkedin" style={{ color:"#272829;" }}></i></span>
												<p className='text-primary-base text-sm hover:text-tertiary-base duration-300'>Muhammad Afif Ma'ruf</p>
											</a>
										</li>
										<li>
											<a className='flex gap-2' href='mailto:m.afif.ma.ruf8@gmail.com' target='_blank'>
												<span><i class="fa-regular fa-envelope" style={{ color:"#272829;" }}></i></span>
												<p className='text-primary-base text-sm hover:text-tertiary-base duration-300'>m.afifma.ruf8@gmail.com</p>
											</a>
										</li>
									</ul>
								</div>
								<div>
									<p className='text-tertiary-base text-xl mb-4'>MENU</p>
									<ul className='flex flex-col gap-2'>
										<li>
											<Link href={"/"}><p className='text-primary-base text-sm hover:text-tertiary-base duration-300'>Home</p></Link>
										</li>
										<li>
											<Link href={"#skill"}><p className='text-primary-base text-sm hover:text-tertiary-base duration-300'>Skill</p></Link>
										</li>
										<li>
											<Link href={"#experience"}><p className='text-primary-base text-sm hover:text-tertiary-base duration-300'>Experience</p></Link>
										</li>
										<li>
											<Link href={"#project"}><p className='text-primary-base text-sm hover:text-tertiary-base duration-300'>Project</p></Link>
										</li>
										<li>
											<Link href={"#contact"}><p className='text-primary-base text-sm hover:text-tertiary-base duration-300'>Contact</p></Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<hr></hr>
						<div className='flex justify-center items-center p-4 text-primary-base text-sm'>
							<p className='mr-1'>Copyright</p>
							<span className='mr-2'><i class="fa-regular fa-copyright" style={{ color:"#272829;" }}></i></span>
							<p>2023 Muhammad Afif Ma'ruf. All Rights Reserved.</p>
						</div>
					</div>
				</footer>

				<Script src="https://kit.fontawesome.com/c559a37e6f.js" crossorigin="anonymous"></Script>
			</body>
		</html>
	)
}
