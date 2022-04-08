import DistressedAssets from '../assets/DistressedAssets.svg'
import Circle from '../assets/Circle.svg'
import texts from '../texts/solutions1.json'
import Paine from '../assets/Paine.gif'
const Solution1 = () => {
	return (
		<div className="solutions1">
			<div className="solutions1_row">
				<div className="single_column">
					<div className="text">
						<h1>{texts.Title}</h1>
						<p>{texts.item_a}</p>
						{/*<img src={DistressedAssets} alt="DistressedAssets" />*/}
						<p> </p>
						<div className="distressed" style={{backgroundImage: `url(${DistressedAssets})`}}>{texts.item_b}</div>
						<p> </p>
						<p>{texts.item_c}</p>
					</div>
				</div>
				<div className="drawing">
					<img src={Circle} alt="Phone" />
				</div>
			</div>
		</div>
	)
}

export default Solution1
