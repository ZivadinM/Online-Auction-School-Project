/** @format */
import logo1 from "../assets/auction 1.png";
import logo2 from "../assets/courthouse 1.png";
import logo3 from "../assets/justice-scale 1.png";
import logo4 from "../assets/roman-law 1.png";
import { Link } from "react-router-dom";
export default function TypeOfAuction(prop) {
	return (
		<section className='Type' id='type'>
			<div className='Header'>
				<h6>ELEKTRONSKE AUKCIJE</h6>
				<h1>
					Tip <span>Aukcija</span>
				</h1>
			</div>
			<div className='cardwraper'>
				<Link className='card' to='/english'>
					<div className='icon'>
						<img src={logo1} alt='' />
					</div>
					<h3>{prop.data.card.head}</h3>
					<p>{prop.data.card.text} </p>
				</Link>
				<Link className='card' to='/dutch'>
					<div className='icon'>
						<img src={logo3} alt='' />
					</div>
					<h3>{prop.data.card2.head}</h3>
					<p> {prop.data.card2.text}</p>
				</Link>
				<Link className='card' to='/panny'>
					<div className='icon'>
						<img src={logo4} alt='' />
					</div>
					<h3>{prop.data.card3.head}</h3>
					<p>{prop.data.card3.text} </p>
				</Link>
				<Link className='card' to='/vickrey '>
					<div className='icon'>
						<img src={logo2} alt='' />
					</div>
					<h3>{prop.data.card4.head}</h3>
					<p>{prop.data.card4.text} </p>
				</Link>
			</div>
		</section>
	);
}
