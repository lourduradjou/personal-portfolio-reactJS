import React from 'react'
import data from '../data/Info'
import myPhoto from '../img/myPhoto.jpeg'

const Hero = () => {
	return (
		<div className='py-4 w-auto word-spacing-wide mx-auto text-black font-medium text-center bg-[#acacac] bg-opacity-80 md:rounded-md md:flex md:justify-around md:items-center tracking-[.1em]  font-outfit'>
			<div className='w-full text-2xl mx-auto px-8 '>
				<img
					src={myPhoto}
					className='m-4 w-[200px] h-auto mx-auto rounded-e-full'
					alt='lourdu-radjou-photo'
				/>
				{data.about1.split(',').map((line, index) => (
					<p
						key={index}
						className={` text-center border-b-2 border-b-slate-300 mb-4 ${
							line === 'Lourdu Radjou'
								? 'bg-gradient bg-clip-text text-transparent font-medium'
								: ''
						}`}
					>
						{line}
					</p>
				))}
			</div>
			<div className='border-l-4 border-[#373737] h-full w-full py-20 text-2xl mx-auto px-8 '>
				{data.about2.split(',').map((line, index) => (
					<p
						key={index}
						className='text-center border-b-2 border-b-red-400 mb-4'
					>
						{line}
					</p>
				))}
			</div>
		</div>
	)
}

export default Hero
