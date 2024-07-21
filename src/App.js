import React, { useEffect } from 'react'
import ImageOne from './components/background/ImageOne'
import ImageTwo from './components/background/ImageTwo'
import ImageThree from './components/background/ImageThree'
import Navbar from './components/Navbar'
import About from './components/About'
import { FaArrowUp } from 'react-icons/fa'
import Projects from './components//Projects'
import Footer from './components/Footer'
import SkillsBig from './components/SkillsBig'

const App = () => {
	useEffect(() => {
		const scrollElement = document.getElementById('scrollUp')

		const handleScroll = () => {
			if (window.scrollY > 100) {
				scrollElement.classList.remove('hidden')
				scrollElement.classList.add('inline')
			} else {
				scrollElement.classList.add('hidden')
				scrollElement.classList.remove('inline')
			}
		}

		const handleScrollUpClick = (event) => {
			event.preventDefault()
			window.scrollTo({ top: 0 })
		}

		window.addEventListener('scroll', handleScroll)
		scrollElement.addEventListener('click', handleScrollUpClick)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			scrollElement.removeEventListener('click', handleScrollUpClick)
		}
	}, [])

	return (
		<div className='font-[outfit] bg-black'>
			<Navbar />
			<ImageOne />
			<div
				id='scrollUp'
				className='bg-gray-400 rounded-full hidden p-2 fixed bottom-4 right-4 z-50 hover:bg-yellow-400 duration-300'
			>
				<FaArrowUp className='text-4xl' />
			</div>
			<SkillsBig />
			<About />
			<Projects />
			<Footer />
		</div>
	)
}

export default App
