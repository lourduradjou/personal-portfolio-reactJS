import React from 'react'
import { useState } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
	const [hamburger, setHamburger] = useState(false)
	const toggleHamburger = () => setHamburger(!hamburger)

	return (
		<div className='flex justify-between px-4 py-2 bg-[#040200] uppercase  max-w-[1440px] mx-auto'> 
		{/* fixed w-full top-0 left-0 z-50 */}
			<h1 className='w-full flex items-center p-2 md:pl-6 text-xl text-[#d83434]'>
				<div className='p-4'>
					<span className='bg-gradient bg-clip-text text-transparent font-medium'>
						Lourdu Radjou
					</span>
				</div>
			</h1>
			<div
				className={
					'md:flex pl-10 hidden w-full items-center justify-center text-white'
				}
			>
				<ul className='flex justify-center items-center'>
					<li className='m-2 p-4 font-medium text-lg hover:bg-slate-200 hover:rounded-full duration-500 hover:text-black hover:cursor-pointer'>
						Home
					</li>
					<li className='m-2 p-4 font-medium text-lg hover:bg-slate-200 hover:rounded-full duration-500 hover:text-black hover:cursor-pointer'>
						About
					</li>
					<li className='m-2 p-4 font-medium text-lg hover:bg-slate-200 hover:rounded-full duration-500 hover:text-black hover:cursor-pointer'>
						Projects
					</li>
					<li className='m-2 p-4 font-medium text-lg hover:bg-slate-200 hover:rounded-full duration-500 hover:text-black hover:cursor-pointer'>
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
				className={
					hamburger
						? 'z-50 fixed left-0 top-0 w-[50%] md:hidden h-full border-r border-r-gray-400 bg-slate-200 ease-in-out duration-[0.8s] text-black'
						: 'fixed left-[-60%]  md:hidden top-0 h-full border-r border-r-gray-400 ease-out duration-[0.8s] z-50'
				}
			>
				<h1 className='w-full p-4 md:pl-6 font-medium text-xl bg-gradient bg-clip-text text-transparent border-b-2 border-b-gray-400 py-10 hover:text-black duration-500'>
					Lourdu Radjou
				</h1>
				<div>
					<ul>
						<li className='px-8 py-2  font-medium text-lg hover:bg-gradient hover:bg-clip-text hover:text-transparent duration-500 border-b-2 border-b-gray-400'>
							Home
						</li>
						<li className='px-8 py-2 font-medium text-lg hover:bg-gradient hover:bg-clip-text hover:text-transparent duration-500 border-b-2 border-b-gray-400'>
							About
						</li>
						<li className='px-8 py-2 font-medium text-lg hover:bg-gradient hover:bg-clip-text hover:text-transparent duration-500 border-b-2 border-b-gray-400'>
							Projects
						</li>
						<li className='px-8 py-2 font-medium text-lg hover:bg-gradient hover:bg-clip-text hover:text-transparent duration-500 border-b-2 border-b-gray-400'>
							Contact Me
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
