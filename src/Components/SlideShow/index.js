import React from 'react';
import { Carousel, CarouselItem } from 'reactstrap';
import { useState } from 'react';
import image1 from '../../img/chand-3.jpeg';
import image2 from '../../img/Krish4.jpg';
import image3 from '../../img/SKG01470.jpg';
import image4 from '../../img/Krish2.jpg';
import image5 from '../../img/Krish3.jpeg';
import './index.css';

const SlideShow = () => {
	const [ activeIndex, setActiveIndex ] = useState(0);
	const [ animating, setAnimating ] = useState(false);
	const [ slides ] = useState([
		{
			img: image1,
			name: 'img1'
		},
		{
			img: image2,
			name: 'img2'
		},
		{
			img: image3,
			name: 'img3'
		},
		{
			img: image4,
			name: 'img4'
		},
		{
			img: image5,
			name: 'img5'
		}
	]);
	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};
	const slide = () => {
		return slides.map((data, i) => {
			return (
				<CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={i}>
					<img src={data.img} alt={data.name} />
				</CarouselItem>
			);
		});
	};
	return (
		<div className="slide-show">
			<div className="text-uppercase text-center position-sticky">
				<h3 className="text-light">Gallery</h3>
			</div>
			<Carousel activeIndex={activeIndex} next={next} previous={previous}>
				{slide()}
			</Carousel>
		</div>
	);
};

export default SlideShow;
