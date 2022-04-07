import Line from '../assets/Line.svg'
import Cross from '../assets/Cross.svg'
import Circle from '../assets/Circle.svg'
import texts from '../texts/cantInvest.json'

const CantInvest = () => {
	return (
		<div className="cantInvest">

			<div className="cantInvest_row">
				<div className="single_column">
					<div className="text">
						<h1>{texts.Title.toUpperCase()}</h1>
						<h2>{texts.subtitle}</h2>
						<img src={Circle} alt="Line" />
					</div>
				</div>
				<div className="list">
					<ul>
						<li><img src={Cross} alt="Line" />{texts.item_a} </li>
						<li><img src={Cross} alt="Line" />{texts.item_b} </li>
						<li><img src={Cross} alt="Line" />{texts.item_c} </li>
						<li><img src={Cross} alt="Line" />{texts.item_d} </li>
						<li><img src={Cross} alt="Line" />{texts.item_e} </li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default CantInvest
