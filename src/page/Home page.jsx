/** @format */

import Hero from ".././components/Hero_Home";
import Bidding from ".././components/Bidding_Home";
import TypeOfAuction from ".././components/TypeOfAuction";
import Sites from "../components/Auction_Sites_Home";
import Features from ".././components/Features_Home";
import Futter from ".././components/Futter_Home";
import data from "../data/data";
import "../App.css";

export default function Homepage() {
	window.scrollTo(0, 0);
	return (
		<div>
			<Hero />
			<Bidding />
			<TypeOfAuction data={data[0].cardsec} />
			<Sites data={data[0].sitesec} />
			<Features />
			<Futter />
		</div>
	);
}
