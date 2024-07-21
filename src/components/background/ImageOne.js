import { Parallax } from 'react-parallax'
import Main from '../../img/main.jpg'
import Hero from '../Hero'
import Skills from '../Skills'

const ImageOne = () => {
	return (
		<Parallax
			className='w-full h-screen'
			blue={0}
			bgImage={Main}
			strength={400}
		>
			<Hero />
		</Parallax>
	)
}

export default ImageOne
