import React from 'react'
import myPhoto from '../img/myPhoto.jpeg'
import TypingAnimator from 'react-typing-animator'
import Skills from './Skills'


const Hero = () => {
	const textArray = [
		'Frontend-developer',
		'Machine-Learning',
		'Full-Stack-Development',
		'MERN-Stack',
	]
	return (
		<div
			id='Home'
			className='w-full h-screen flex justify-center items-center word-spacing-wide text-white font-medium text-center tracking-[.1em] font-outfit'
		>
			<div className='max-w-[1000px] w-full rounded-md max-h-[480px] flex items-center bg-opacity-80 m-4 flex-col md:flex-row justify-between'>
				<div className='md:rounded-e-full max-w-[400px] flex max-h-[400px] w-full justify-center items-center text-2xl md:mr-4 overflow-hidden'>
					<img
						src={myPhoto}
						className='max-w-full max-h-full object-center rounded-md'
						alt='lourdu-radjou-photo'
					/>
				</div>

				<div className='md:border-l-4 border-t-4 md:border-t-0 text-white bg-black rounded-md border-[#ffffff] h-full w-full py-2 md:py-20 md:text-2xl text-lg px-8'>
					<div className='text-center'>
						<h1 className='text-4xl mb-4'>Hey 😎 there</h1>
						<p>
							I am{' '}
							<span className='font-bold text-[#F9C421]'>
								Lourdu
							</span>
							, a passionate software developer dedicated to
							solving real-world problems. I specialize in{' '}
							<TypingAnimator
								textArray={textArray}
								cursorColor='#333'
								textColor='#F9C421'
								fontSize='24px'
								loop
								typingSpeed={60}
								delaySpeed={1000}
								backspace
								height='60px'
							/>
							<button className='flex justify-center items-center bg-red-600 text-white drop-shadow-xl px-8 py-2 rounded-full mx-auto text-2xl hover:bg-gray-500 duration-500 '>
								Resume
							</button>
							<div className='w-[350px] mx-auto mt-4'>
								<Skills />
							</div>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
