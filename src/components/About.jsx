import React from 'react'
import data from '../data/Info'
import eduImg from '../img/educationImg.png'

const About = () => {
	return (
		<div className='flex justify-around w-full h-full items-center p-4'>
			<img src={eduImg} alt='education animated looks studying' />
			<p className='text-xl word-spacing-wide text-justify px-10 border-2 border-black py-8 m-4'>
				{data.mainAbout}
			</p>
		</div>
	)
}

export default About
