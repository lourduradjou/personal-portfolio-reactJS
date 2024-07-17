import ImageOne from './components/background/ImageOne'
import ImageTwo from './components/background/ImageTwo'
import ImageThree from './components/background/ImageThree'
import Navbar from './components/Navbar'
import About from './components/About'

const App = () => (
	<div className='font-[outfit]'>
		<Navbar />
		<ImageOne />
		<About />
		<ImageTwo />
		<ImageThree />
	</div>
)

export default App
