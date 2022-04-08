import Check from '../assets/Check.png'
import Circle from '../assets/Circle.svg'
import texts from '../texts/solutions2.json'

const Solutions2 = () => {
	return (
		<div className="cantInvest">

			<div className="cantInvest_row">
				<div className="single_column">
					<div className="text">
						<img src={Circle} alt="Line" />
					</div>
				</div>
				<div className="list">
					<ul>
						<li><img src={Check} alt="Line" />{texts.item_a} </li>
						<li><img src={Check} alt="Line" />{texts.item_b} </li>
						<li><img src={Check} alt="Line" />{texts.item_c} </li>
						<li><img src={Check} alt="Line" />{texts.item_d} </li>
						<li><img src={Check} alt="Line" />{texts.item_e} </li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Solutions2
