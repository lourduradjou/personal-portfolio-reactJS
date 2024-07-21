import React from 'react'
import { useState } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
	const [hamburger, setHamburger] = useState(false)
	const [active, setActive] = useState('Home')
	const toggleHamburger = () => setHamburger(!hamburger)

	const scroolToView = (id) => {
		const element = document.getElementById(id)
		setActive(id)

		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div className='w-full bg-black fixed top-0 left-0 z-50'>
			<nav className='flex justify-around px-4  bg-[#040200] uppercase  max-w-[1240px] w-full mx-auto'>
				<div className='w-full flex items-center p-2 md:pl-6 text-xl'>
					<div className='p-4 duration-500 hover:scale-105 bg-gradient bg-clip-text text-transparent font-medium'>
						Lourdu Radjou
					</div>
				</div>
				<div
					className={
						'md:flex  hidden w-full items-center justify-center text-white'
					}
				>
					<ul className='flex justify-center items-center'>
						<li
							className={`${
								active === 'Home'
									? 'bg-yellow-400 text-black'
									: ''
							} m-2 px-4 py-2 font-medium text-lg hover:bg-blue-200 rounded-full duration-500 hover:text-black hover:cursor-pointer select-none`}
							onClick={() => scroolToView('Home')}
						>
							Home
						</li>
						<li
							className={`${
								active === 'About'
									? 'bg-yellow-400 text-black'
									: ''
							} m-2 px-4 py-2 font-medium text-lg hover:bg-blue-200 rounded-full duration-500 hover:text-black hover:cursor-pointer select-none`}
							onClick={() => scroolToView('About')}
						>
							About
						</li>
						<li
							className={`${
								active === 'Projects'
									? 'bg-yellow-400 text-black'
									: ''
							} m-2 px-4 py-2 font-medium text-lg hover:bg-blue-200 rounded-full duration-500 hover:text-black hover:cursor-pointer select-none`}
							onClick={() => scroolToView('Projects')}
						>
							Projects
						</li>
						<li
							className={`${
								active === 'Contact Me'
									? 'bg-yellow-400 text-black'
									: ''
							} m-2 px-4 py-2 font-medium text-lg hover:bg-blue-200 rounded-full duration-500 hover:text-black hover:cursor-pointer select-none`}
							onClick={() => scroolToView('Contact Me')}
						>
							Contact Me
						</li>
					</ul>
				</div>

				<div
					className={`md:hidden px-4 flex items-center  ease-in-out duration-[0.5s]`}
					onClick={toggleHamburger}
				>
					<div
						className={`${
							hamburger ? 'bg-slate-500' : 'bg-slate-300'
						} p-4 rounded-full`}
					>
						{hamburger ? (
							<AiOutlineClose size={25} />
						) : (
							<IoMenuOutline size={25} />
						)}
					</div>
				</div>

				<div
					className={`${
						hamburger ? 'left-0  w-[60%] ' : ' left-[-60%]'
					}
						z-50 fixed top-0 md:hidden ease-out duration-[0.8s] text-black text-center  h-full border-r border-r-gray-400 bg-slate-200 
					`}
				>
					<h1 className='w-full text-center p-4 md:pl-6 font-medium text-xl bg-gradient bg-clip-text text-transparent border-b-2 border-b-gray-400 py-10 hover:text-black duration-500'>
						Lourdu Radjou
					</h1>
					<div>
						<ul className='w-full'>
							<li
								className={`${
									active === 'Home'
										? 'bg-gray-800 text-white'
										: ''
								} w-full py-2  font-medium text-lg hover:bg-slate-400  duration-200 border-b-2 border-b-gray-400`}
							>
								Home
							</li>
							<li
								className={`${
									active === 'About'
										? 'bg-gray-800 text-white'
										: ''
								} w-full py-2  font-medium text-lg hover:bg-slate-400  duration-200 border-b-2 border-b-gray-400`}
							>
								About
							</li>
							<li
								className={`${
									active === 'Projects'
										? 'bg-gray-800 text-white'
										: ''
								} w-full py-2  font-medium text-lg hover:bg-slate-400  duration-200 border-b-2 border-b-gray-400`}
							>
								Projects
							</li>
							<li
								className={`${
									active === 'Contact Me'
										? 'bg-gray-800 text-white'
										: ''
								} w-full py-2  font-medium text-lg hover:bg-slate-400  duration-200 border-b-2 border-b-gray-400`}
							>
								Contact Me
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
