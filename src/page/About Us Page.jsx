/** @format */

import Nav from "../components/Navbar_AboutUs";
import CardSec from "../components/Cards_About_Us";
import Fotter from "../components/Futter_Rest";
import data from "../data/about us data";
import "../App.css";

export default function AboutUsPage() {
	return (
		<div>
			<Nav />
			<CardSec data={data[0].cardsec} />
			<Fotter />
		</div>
	);
}
