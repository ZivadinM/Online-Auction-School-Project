/** @format */

import Hero from "../components/Hero_For_Type";
import CardSec from "../components/Cards_For_Type";
import Fotter from "../components/Futter_Rest";
import Examples from "../components/Example";
import data from "../data/data";
import "../App.css";

export default function VickreyPage() {
	return (
		<div>
			<Hero data={data[4].sitesec} />
			<CardSec data={data[4].cardsec} />
			<Examples data={data[4].examples} />

			<Fotter />
		</div>
	);
}
