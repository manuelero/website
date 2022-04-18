import Line from '../assets/Line.svg'
import Circle from '../assets/Circle.svg'
import RoadmapDrawing from '../assets/RoadmapDrawing.svg'
import SquareBox from '../assets/SquareBox.svg'
import texts from '../texts/roadmap.json'

const Button = ({ align, text }) => (
  <button className="my-button">
    <img src={Circle} />
		<h2>{text}</h2>
  </button>
)

// <img src={RoadmapDrawing} alt="Line" />
const Roadmap = () => {
	return (
		<div className="Roadmap">
		<h1>{texts.Title.toUpperCase()}</h1>
			<div className="Roadmap_row">
				<div className="single_column">
					<Button text={texts.subtitle_a}/>
				</div>
				<div className="single_column">
					<Button text={texts.subtitle_b}/>
				</div>
				<div className="single_column">
					<Button text={texts.subtitle_c}/>
				</div>
				<div className="single_column">
					<Button text={texts.subtitle_d}/>
				</div>

			</div>
		</div>
	)
}

export default Roadmap
