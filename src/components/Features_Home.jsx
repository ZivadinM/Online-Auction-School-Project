/** @format */

import photo from "../assets/pexels-cocarinne-6446708 1.png";

export default function Features() {
	return (
		<section className='Features' id='advantage'>
			<div className='Header'>
				<h6>ELEKTRONSKE AUKCIJA</h6>
				<h1>
					Prednosti Elektornske <span>Aukcije</span>
				</h1>
			</div>
			<div className='FeaturesWraper'>
				<div className='linewraper'>
					<div className='feature'>
						<p>Nema radnog vremena</p>
					</div>
					<div className='feature'>
						<p>Nema geografskih ogranicenja</p>
					</div>
					<div className='feature'>
						<p>Efikasnost i brzina</p>
					</div>
					<div className='feature	'>
						<p>Veća dostupnost i veći broj kupaca</p>
					</div>
				</div>
				<div className='imgoverlay featureimg'>
					<img src={photo} alt='' />
					<div className='after'></div>
				</div>
			</div>
		</section>
	);
}
