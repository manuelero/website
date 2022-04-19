import texts from '../texts/mint.json'
import MintDrawing from '../assets/Solutions1.svg'
import Circle from '../assets/Circle.svg'
import Fox from '../assets/metamask-logo-bw.png'
const Button = ({ text, image, secondaryText}) => (
  <button className="my-button">
    <img src={image} />
		<h2>{text}</h2>
		<p>{secondaryText}</p>
  </button>
)


const Mint = () => {
	return (
		<div className="mint">
			<div className="mint_row">
				<div className="single_column">
					<img src={MintDrawing} alt="Line" />
				</div>
				<div className="single_column">
					<Button text={texts.mint} image={Circle} secondaryText={texts.date}/>

					<Button text={texts.join} image={Fox} />
				</div>
			</div>
		</div>
	)
}

export default Mint
