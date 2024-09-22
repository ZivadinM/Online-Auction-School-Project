/** @format */
import logo from "../assets/logo.png";
import arrow from "../assets/play.png";
export default function Futter() {
	return (
		<section className='Futter'>
			<div className='left'>
				<div className='Logo'>
					<img src={logo} alt='' />
					<a href=''>Aukcija</a>
				</div>
			</div>
			<div className='center'>
				<a className='menu' href=''>
					meni
				</a>
				<a href='#home'>početna</a>
				<a href='#bidingtechniques'>tehnike ponude</a>
				<a href='#type'>tipovi</a>
				<a href='#use'>korišćenje</a>
				<a href='#advantage'>prednosti</a>
			</div>
			<div className='right'>
				<p>Pretplati se na newsletter</p>
				<div className='search'>
					<div className='searchitem'>
						<img src={arrow} alt='' />
					</div>
				</div>
			</div>
		</section>
	);
}
