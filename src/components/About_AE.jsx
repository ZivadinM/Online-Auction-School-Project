/** @format */

export default function About(prop) {
	return (
		<section className={prop.data.head}>
			<div className={`About`}>
				<p className='pretitle'>ELEKTRONSKE AUKCIJE</p>
				<h1>O {prop.data.head}</h1>
				<p className='AboutText'>{prop.data.text}</p>
			</div>
		</section>
	);
}
