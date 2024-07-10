import { Parallax } from 'react-parallax';
import Footer from '../../img/footer.jpg';

const ImageThree = () => {
  return (
    <Parallax
      className='w-full h-screen flex items-center justify-center'
      bgImage={Footer}
      strength={400}
	  bgImageAlt={'md:w-[50%]'}
    >
      <div className='bg-black bg-opacity-50 w-full h-full flex items-center justify-center'>
        <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold text-center p-4'>
          A trip to Moon
        </span>
      </div>
    </Parallax>
  );
}

export default ImageThree;
