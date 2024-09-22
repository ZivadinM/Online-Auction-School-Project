/** @format */
import CardSec from "./Cards";

export default function TypeOfAuction(prop) {
	return (
		<section className='Type v23'>
			<div className='Header'>
				<h6>ELEKTRONSKE AUKCIJE</h6>
				<h1>Karaktristike</h1>
			</div>
			<div className='cardwraper'>
				<CardSec data={prop} />
			</div>
		</section>
	);
}
