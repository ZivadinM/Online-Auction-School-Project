/** @format */

import { Link } from "react-router-dom";

import logo2 from "../assets/amazon.png";
import logo3 from "../assets/ebay.png";
import photo from "../assets/sitephoto.png";

export default function Sites(prop) {
	return (
		<section className='Site' id='use'>
			<div className='SiteWraper'>
				<div className='wraperr'>
					<div className='imgoverlay'>
						<img src={photo} alt='' />
						<div className='after'></div>
					</div>
					<div className='line'></div>
				</div>
				<div className='sitetextwraper'>
					<div className='SiteHeader'>
						<h6>ELEKTRONSKE AUKCIJE</h6>
						<h1>{prop.data.head}</h1>
						<p>{prop.data.text} </p>
					</div>
					<div className='CircleCardWraper'>
						<Link
							className='CardWraper'
							style={{ textDecoration: "none" }}
							to='/amazon'
						>
							<div className='CircleCard'>
								<img src={logo2} alt='' />
							</div>
							<p>amazon</p>
						</Link>
						<Link
							className='CardWraper'
							style={{ textDecoration: "none" }}
							to='/ebay'
						>
							<div className='CircleCard'>
								<img src={logo3} alt='' />
							</div>
							<p>ebay</p>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
