/** @format */

// /** @format */
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import logo1 from "../assets/auction 1.png";
import logo2 from "../assets/courthouse 1.png";
import logo3 from "../assets/justice-scale 1.png";
import logo4 from "../assets/roman-law 1.png";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const SampleSlider = (prop) => {
	console.log(prop);
	let x = 4;
	if (window.innerWidth < 1340) {
		x = 3;
	}

	if (window.innerWidth < 720) {
		x = 1;
	}

	return (
		<Swiper
			className='sample-slider'
			loop={true}
			slidesPerView={x}
			loopFillGroupWithBlank={true}
			loopAdditionalSlides={50}
		>
			<SwiperSlide className={`card ${prop.data.data.card_class}`}>
				<div className='icon'>
					<img src={logo1} alt='' />
				</div>
				<h3>{prop.data.data.card.head}</h3>
				<p>{prop.data.data.card.text}</p>
			</SwiperSlide>
			<SwiperSlide className={`card ${prop.data.data.card_class}`}>
				<div className='icon'>
					<img src={logo2} alt='' />
				</div>
				<h3>{prop.data.data.card2.head}</h3>
				<p>{prop.data.data.card2.text}</p>
			</SwiperSlide>
			<SwiperSlide className={`card ${prop.data.data.card_class}`}>
				<div className='icon'>
					<img src={logo3} alt='' />
				</div>
				<h3>{prop.data.data.card3.head}</h3>
				<p>{prop.data.data.card3.text}</p>
			</SwiperSlide>
			<SwiperSlide className={`card ${prop.data.data.card_class}`}>
				<div className='icon'>
					<img src={logo4} alt='' />
				</div>
				<h3>{prop.data.data.card4.head}</h3>
				<p>{prop.data.data.card4.text}</p>
			</SwiperSlide>
		</Swiper>
	);
};
export default SampleSlider;
