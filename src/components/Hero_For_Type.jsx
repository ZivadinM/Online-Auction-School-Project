/** @format */

import photo from "../assets/sitephoto.png";
// import logo from "../assets/logo.png";
import Nav from "./Navbar";

export default function Sites(prop) {
	return (
		<section className='Site'>
			<Nav />
			<div className='SiteWraper v2'>
				<div className='wraperr'>
					<div className='imgoverlay'>
						<img src={photo} alt='' />
						<div className='after'></div>
					</div>
					<div className='line'></div>
				</div>
				<div className='sitetextwraper v22'>
					<div className='SiteHeader'>
						<h6>ELEKTRONSKE AUKCIJE</h6>
						<h1>{prop.data.head}</h1>
						<p className='ve'>{prop.data.text} </p>
					</div>
				</div>
			</div>
		</section>
	);
}
