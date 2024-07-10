import { Parallax } from 'react-parallax'
import MiddleImg from '../../img/middleImg.jpg'

const ImageTwo = () => {
	return (
		<Parallax
			className='w-full h-screen flex items-center justify-center'
			bgImage={MiddleImg}
			strength={400}
			blue={0} 
		>
			<span className='text-4xl text-white font-bold'>
				A trip to Moon
			</span>
		</Parallax>
	)
}

export default ImageTwo
