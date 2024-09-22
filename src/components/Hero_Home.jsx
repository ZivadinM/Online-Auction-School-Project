/** @format */

import Nav from "./Navbar";
export default function Hero() {
	return (
		<section className='Heroo' id='home'>
			<Nav />
			<div className='Hero'>
				<div className='HeroTekst'>
					<h1>
						Elektronske <span>Aukcije</span>
					</h1>
					<p>
						Elektronske aukcije pružaju platformu za kupce i prodavce, gde se
						oni konkurentno nadmeću pomoću cena i kvaliteta za različite
						proizvode i usluge.
					</p>
				</div>
			</div>
		</section>
	);
}
