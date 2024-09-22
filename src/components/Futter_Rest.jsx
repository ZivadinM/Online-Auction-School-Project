/** @format */
import logo from "../assets/logo.png";
import arrow from "../assets/play.png";
export default function Futter(prop) {
	return (
		<section className={prop.color}>
			<div className='Futter'>
				<div className='left'>
					<div className='Logo'>
						<img src={logo} alt='' />
						<a href=''>Aukcije</a>
					</div>
				</div>
				<div className='center'>
					<a className='menu' href=''>
						meni
					</a>
					<a href='/home'>početna strana</a>
					<a href='/english'>engleska aukcija</a>
					<a href='/panny'>penny aukcija</a>
					<a href='/dutch'>holandska aukcija</a>
					<a href='/vickrey'>vikrijeva aukcija</a>
					<a href='/amazon'>amazon</a>
					<a href='/aboutus'>onama</a>
					<a href='/ebay'>ebay</a>
				</div>
				<div className='right'>
					<p>pretplati se na newsletter</p>
					<div className='search'>
						<div className='searchitem'>
							<img src={arrow} alt='' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
