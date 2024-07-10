import { Parallax } from 'react-parallax'
import Main from '../../img/main.jpg'
import Hero from '../Hero'

const ImageOne = () => {
	return (
		<Parallax
			className='w-full h-screen flex items-center justify-center'
			blue={0}
			bgImage={Main}
			strength={400}
		>
			<Hero />
		</Parallax>
	)
}

export default ImageOne
