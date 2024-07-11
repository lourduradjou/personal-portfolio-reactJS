import React from 'react'
// import data from '../data/Info'
import eduImg from '../img/educationImg.png'
import myPhoto from '../img/myPhoto.jpeg'

const About = () => {
	const handleClick = () => {}
	return (
		<section
			className='md:flex-row flex justify-around items-center w-full h-full p-10 md:p-6 bg-[snow-white] max-w-[1440px] mt-10 flex-col'
			id='About'
		>
			<img src={eduImg} alt='education animated looks studying' />
			<div>
				<div className='text-xl word-spacing-wide text-justify px-10 border-2 border-black py-8 m-4 bg-slate-100 drop-shadow-xl'>
					<div className='flex justify-around items-center drop-shadow-lg bg-slate-200 mb-8'>
						<img
							src={myPhoto}
							className='m-4 max-w-[50px] h-auto  rounded-full'
							alt='lourdu-radjou-photo'
						/>
						<h1 className='text-pink-500'>
							<span className='text-2xl text-red-600'>D</span>
							eveloper & Avid{' '}
							<span className='text-2xl text-red-600'>
								ML
							</span>{' '}
							Learner
						</h1>
					</div>
					<div>
						<p className=' text-[1rem] text-justify'>
							<span className='inline-block align-top text-[60px] font-bold text-gray-500 px-4 italic'>
								"
							</span>
							<span className='text-4xl text-red-600 font-serif'>
								I
							</span>{' '}
							am a dynamic and innovative computer science student
							deeply passionate about technology, with a
							particular love for full-stack development and
							machine learning. My journey in CS has been marked
							by a relentless pursuit of knowledge and a creative
							flair for designing intuitive user interfaces and
							robust backend systems. From crafting elegant React
							components to architecting seamless user
							experiences, I thrive on challenges that allow me to
							merge my analytical mindset with my passion for
							designing. My ultimate goal is to master artificial
							intelligence and machine learning, leveraging my
							proactive and resourceful approach to contribute
							meaningfully to the future of technology.{' '}
							<span className='inline-block align-top font-bold text-gray-500 text-[60px] italic py-2'>
								"
							</span>
						</p>
					</div>
					<div className='w-full flex justify-center'>
						{/* button to point to the resume */}
						<button
							className=' bg-red-600 text-white drop-shadow-xl px-8 py-2 rounded-full text-2xl hover:bg-gray-500 duration-500 '
							onClick={handleClick}
						>
							Resume
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
