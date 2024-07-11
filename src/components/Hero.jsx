import React from 'react'
import data from '../data/Info'
import myPhoto from '../img/myPhoto.jpeg'

const Hero = () => {
	return (
		<div
			id='Home'
			className='w-full h-screen flex justify-center items-center word-spacing-wide text-black font-medium text-center   tracking-[.1em] font-outfit'
		>
			<div className='max-w-[1000px] mb-[-10px] rounded-md max-h-[480px] flex items-center bg-[#454545]  bg-opacity-80 m-4 flex-col md:flex-row justify-center'>
				<div className='md:rounded-e-full max-w-[300px] flex max-h-[300px] w-full justify-center items-center text-2xl md:mr-4 bg-black overflow-hidden'>
					<img
						src={myPhoto}
						className='max-w-full max-h-full object-center'
						alt='lourdu-radjou-photo'
					/>
				</div>

				<div className='md:border-l-4 border-t-4 md:border-t-0 border-[#ffffff] h-full w-full py-2 md:py-20 md:text-2xl text-lg mx-auto px-8 '>
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
		</div>
	)
}

export default Hero
