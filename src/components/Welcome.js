import Line from '../assets/Line.svg'
import Phone from '../assets/Phone.png'
import texts from '../texts/welcome.json'
import Paine from '../assets/Paine.gif'
const Welcome = () => {
	return (
		<div className="welcome">

			<div className="welcome_row">
				<div className="single_column">
					<div className="text">
						<h1>{texts.Title}</h1>
						<img className="line" src={Line} alt="Line" />
						<p>{texts.subtitle}</p>
					</div>
				</div>
				<div className="phone">
					<img src={Phone} alt="Phone" />

					<div className="text">
						</div>
				</div>
			</div>
		</div>
	)
}

export default Welcome
