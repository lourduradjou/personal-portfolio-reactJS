import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
	return (
		<div className='w-full bg-slate-900 text-xl word-spacing-wide p-4 text-slate-300'>
			<div className='max-w-[1000px] mx-auto'>
				<h1 className='w-full bg-black  text-yellow-400 flex justify-center p-4 rounded-md text-xl mb-4'>
					Creative Mind Developer
				</h1>
				<div className='flex  justify-around items-center pb-10'>
					<div>
						<ul>
							<li className='font-bold'>Connect With Me!</li>
							<div className='flex justify-evenly items-center'>
								<li>Linkedin </li>
								<AiOutlineLinkedin />
							</div>
						</ul>
						<ul className='mt-2'>
							<li className='font-bold'>Explore My Works!</li>
							<div className='flex justify-evenly items-center'>
								<li>Github </li>
								<FaGithub />
							</div>
						</ul>
					</div>
					<div>
						<ul className='font-bold '>
							<li>Home</li>
							<li>Projects</li>
							<li>Skills</li>
							<li>Certifications</li>
							<li>Contact</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
