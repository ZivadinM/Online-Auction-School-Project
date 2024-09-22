/** @format */
import logo1 from "../assets/WhatsApp Image 2024-07-06 at 15.41.56_ea7273ca.jpg";
import logo2 from "../assets/WhatsApp Image 2024-07-06 at 15.44.22_1364c9ee.jpg";
import logo3 from "../assets/WhatsApp Image 2024-07-06 at 15.27.07_a920cdd5.jpg";
import logo4 from "../assets/WhatsApp Image 2024-07-06 at 15.31.50_d4bcbb44.jpg";
import { Link } from "react-router-dom";
export default function TypeOfAuction(prop) {
	return (
		<section className='Type' id='type'>
			<div className='Header'>
				<h6>ELEKTRONSKE AUKCIJE</h6>
				<h1>
					O <span>Nama</span>
				</h1>
			</div>
			<div className='cardwraper'>
				<Link className='card card1'>
					<div className='icon icon1'>
						<img src={logo1} alt='' />
					</div>
					<h3>{prop.data.card.head}</h3>
					<p>{prop.data.card.text} </p>
				</Link>
				<Link className='card card1'>
					<div className='icon icon1'>
						<img src={logo3} alt='' />
					</div>
					<h3>{prop.data.card2.head}</h3>
					<p> {prop.data.card2.text}</p>
				</Link>
				<Link className='card card1'>
					<div className='icon icon1'>
						<img src={logo2} alt='' />
					</div>
					<h3>{prop.data.card3.head}</h3>
					<p>{prop.data.card3.text} </p>
				</Link>
				<Link className='card card1'>
					<div className='icon icon1'>
						<img src={logo4} alt='' />
					</div>
					<h3>{prop.data.card4.head}</h3>
					<p>{prop.data.card4.text} </p>
				</Link>
			</div>
		</section>
	);
}
