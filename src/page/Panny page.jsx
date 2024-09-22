/** @format */

import Hero from "../components/Hero_For_Type";
import CardSec from "../components/Cards_For_Type";
import Fotter from "../components/Futter_Rest";
import Examples from "../components/Example";
import data from "../data/data";
import "../App.css";

export default function PannyPage() {
	window.scrollTo(0, 0);

	return (
		<div>
			<Hero data={data[3].sitesec} />
			<CardSec data={data[3].cardsec} />
			<Examples data={data[3].examples} />
			<Fotter />
		</div>
	);
}
