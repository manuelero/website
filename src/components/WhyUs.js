import Line from '../assets/Line.svg'
import Cross from '../assets/Cross.svg'
import WhyUsDrawing from '../assets/WhyUsDrawing.svg'
import SquareBox from '../assets/SquareBox.svg'
import texts from '../texts/whyUs.json'

const WhyUs = () => {
	return (
		<div className="whyUS">
		<div className="whyUs_header">
			<h1>{texts.Title.toUpperCase()}</h1>
		</div>

			<div className="whyUS_row">
				<div className="single_column">
					<div className="text">
						<img src={WhyUsDrawing} alt="Line" />
					</div>
				</div>
				<div className="list">
						<p>{texts.item_a} </p>
						<p>{texts.item_b} </p>
						<p>{texts.item_c} </p>
				</div>
			</div>
		</div>
	)
}

export default WhyUs
