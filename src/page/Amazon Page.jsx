/** @format */

import Hero from "../components/Hero_AE";
import About from "../components/About_AE";
import Futter from "../components/Futter_Rest";
import data from "../data/AE_about_data";

export default function Homepage() {
	window.scrollTo(0, 0);

	return (
		<div>
			<Hero data={data[0]} />
			<About data={data[0]} />
			<Futter color={data[0].head} />
		</div>
	);
}
