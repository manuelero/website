import DistressedAssets from '../assets/DistressedAssets.svg'
import Solutions1SVG from '../assets/Solutions1.svg'
import texts from '../texts/solutions1.json'
const Solution1 = () => {
	return (
		<div className="solutions1">
			<div className="solutions1_row">
				<div className="single_column">
					<div className="text">
						<h1>{texts.Title}</h1>
						<p>{texts.item_a}</p>
						<p> </p>
						<div className="distressed" style={{backgroundImage: `url(${DistressedAssets})`}}>{texts.item_b}</div>
						<p> </p>
						<p>{texts.item_c}</p>
					</div>
				</div>
				<div className="drawing">
					<img src={Solutions1SVG} alt="Phone" />
				</div>
			</div>
		</div>
	)
}

export default Solution1
