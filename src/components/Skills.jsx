import React from 'react'
import Slider from 'react-infinite-logo-slider'

import aws from '../img/skills/aws.png'
import azure from '../img/skills/azure.png'
import css from '../img/skills/css.png'
import bootstrap from '../img/skills/bootstrap.png'
import express from '../img/skills/express.png'
import html from '../img/skills/html.png'
import js from '../img/skills/js.png'
import figma from '../img/skills/figma.png'
import mongodb from '../img/skills/mongodb.png'
import numpy from '../img/skills/numpy.png'
import pandas from '../img/skills/pandas.png'
import reactJs from '../img/skills/reactJs.png'
import python from '../img/skills/python.png'
import tailwind from '../img/skills/tailwind.png'
import nodeJs from '../img/skills/nodeJs.png'

const Skills = ({ width, duration, iconSize, showSkills }) => {
	return (
		<>
			{showSkills ? <h1 className='text-center font-bold text-4xl text-white p-6'>
				Skills
			</h1> : null}
			<Slider
				width={width}
				duration={duration}
				pauseOnHover={true}
				blurBorders={false}
				blurBoderColor={'#fff'}
			>
				<Slider.Slide>
					<img src={html} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={css} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={js} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={reactJs} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={nodeJs} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={express} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={mongodb} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={figma} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={tailwind} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={bootstrap} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={aws} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={azure} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={pandas} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={numpy} alt='any' className={iconSize} />
				</Slider.Slide>
				<Slider.Slide>
					<img src={python} alt='any' className={iconSize} />
				</Slider.Slide>
			</Slider>
		</>
	)
}

export default Skills
