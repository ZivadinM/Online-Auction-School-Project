/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/Home page";
import EnglishPage from "./page/English page";
import DutchPage from "./page/Dutch page";
import PannyPage from "./page/Panny page";
import VickreyPage from "./page/Vickrey page";
import AmazonPage from "./page/Amazon Page";
import EbayPage from "./page/Ebay Page";
import AboutUs from "./page/About Us Page";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
	return (
		<div>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route index element={<Homepage />}></Route>
					<Route path='/home' element={<Homepage />}></Route>
					<Route path='/english' element={<EnglishPage />}></Route>
					<Route path='/dutch' element={<DutchPage />}></Route>
					<Route path='/panny' element={<PannyPage />}></Route>
					<Route path='/vickrey' element={<VickreyPage />}></Route>
					<Route path='/amazon' element={<AmazonPage />}></Route>

					<Route path='/ebay' element={<EbayPage />}></Route>
					<Route path='/aboutus' element={<AboutUs />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
