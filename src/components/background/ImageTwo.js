import { Parallax } from 'react-parallax'
import MiddleImg from '../../img/middleImg.jpg'
import Projects from '../Projects'

const ImageTwo = () => {
	return (
		<Parallax
			className='w-full h-screen flex items-center justify-center'
			bgImage={MiddleImg}
			strength={400}
			blue={0}
		>
			<Projects />
		</Parallax>
	)
}

export default ImageTwo
