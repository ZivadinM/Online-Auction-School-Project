/** @format */

import Nav from "./Navbar_AE";

export default function Hero(prop) {
	return (
		<section className={`HeroV2 ${prop.data.head}`}>
			<Nav data={prop.data.head} />
			<div className='HeroV2header'>
				<div className='HeroV2wraper'>
					<h3>
						Increase Your <span>Auction</span>
					</h3>
					<div className='amazon'>
						<div className='bid'>
							<p>bid</p>
						</div>
						<h1>{prop.data.head}</h1>
					</div>
				</div>
			</div>
		</section>
	);
}
