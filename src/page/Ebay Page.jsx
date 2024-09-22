/** @format */

import Hero from "../components/Hero_AE";
import About from "../components/About_AE";
import Futter from "../components/Futter_Rest";
import data from "../data/AE_about_data";
import CardSec from "../components/Cards_Wraper_AE";
import cards_data from "../data/AE_card_data";

export default function Homepage() {
	window.scrollTo(0, 0);

	return (
		<div>
			<Hero data={data[1]} />
			<About data={data[1]} />
			<CardSec data={cards_data[1].cardcontent} />
			<Futter color={data[1].head} />
		</div>
	);
}
