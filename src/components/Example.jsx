/** @format */

export default function About(prop) {
	return (
		<section className='Example'>
			<div className='Header'>
				<p className='pretitle'>ELEKTRONSKE AUKCIJE</p>
				<h1>Primer</h1>
				<p className='AboutText'>
					{prop.data.text.split("\n").map((line) => (
						<>
							{line
								.split(/(\d+)/)
								.map((part, i) =>
									/\d+/.test(part) ? <strong key={i}>{part}</strong> : part
								)}
							<br />
						</>
					))}
				</p>
			</div>
		</section>
	);
}
