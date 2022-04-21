import RoadmapDrawing from '../assets/RoadmapDrawing.svg'
import SquareBox from '../assets/SquareBox.svg'
import texts from '../texts/roadmap.json'

const Button = ({ align, text, index }) => (
  <button className="my-button">
    <h2>{index}. </h2>
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
					<Button text={texts.subtitle_a} index={1}/>
				</div>
				<div className="single_column">
					<Button text={texts.subtitle_b} index={2}/>
				</div>
				<div className="single_column">
					<Button text={texts.subtitle_c} index={3}/>
				</div>
				<div className="single_column">
					<Button text={texts.subtitle_d} index={4}/>
				</div>

			</div>
		</div>
	)
}

export default Roadmap
