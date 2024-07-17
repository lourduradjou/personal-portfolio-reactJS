import data from '../data/SliderImgData'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Projects = () => {
	const slideLeft = () => {
		let slider = document.getElementById('slider')
		slider.scrollLeft = slider.scrollLeft - 300
	}

	const slideRight = () => {
		let slider = document.getElementById('slider')
		slider.scrollLeft = slider.scrollLeft + 300
	}

	const handleClick = (event) => {
		const button = event.target
		button.classList.add('scale-95')

		setTimeout(() => {
			button.classList.remove('scale-95')
		}, 200)
	}

	return (
		<div className='p-4'>
			<div className='flex items-center justify-center mb-10 space-x-14 select-none'>
				<MdChevronLeft
					size={40}
					className='rounded-full bg-white opacity-50 cursor-pointer hover:opacity-100 duration-300 '
					onClick={slideLeft}
				/>

				<h1 className='font-bold text-4xl text-white'>My Projects</h1>
				<MdChevronRight
					size={40}
					className='rounded-full bg-white opacity-50 cursor-pointer hover:opacity-100 duration-300'
					onClick={slideRight}
				/>
			</div>
			<div className='flex items-center justify-center w-[40%] mx-auto p-4'>
				<div
					id='slider'
					className='w-full h-full overflow-x-scroll scroll scroll-smooth whitespace-nowrap scrollbar-hide p-2'
				>
					{data.map((item) => (
						<div
							key={item.id}
							className='relative w-[250px] h-[400px] rounded-3xl inline-block p-4 cursor-pointer hover:scale-105 ease-in-out duration-300 group'
						>
							<img
								className='rounded-2xl w-full h-full opacity-50 group-hover:opacity-100 duration-300'
								src={item.img}
								alt='/'
							/>
							<div className='absolute bottom-4 ml-4 mb-4 left-2 flex  space-x-4 pointer-events-none '>
								<button
									className=' bg-red-600 text-white drop-shadow-xl px-4 py-1 rounded-full text-md duration-100 pointer-events-auto'
									onClick={handleClick}
								>
									Repo
								</button>
								<button
									className=' bg-red-600 text-white drop-shadow-xl px-4 py-1 rounded-full text-md duration-100 pointer-events-auto'
									onClick={handleClick}
								>
									Link
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default Projects
