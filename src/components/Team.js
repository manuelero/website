import Team1 from '../assets/Team1.png'
import Team2 from '../assets/Team2.png'
import Team3 from '../assets/Team3.png'
import texts from '../texts/team.json'

const Team = () => {
	return (
		<div className="team">
		<h1>{texts.Title}</h1>
			<div className="teams_row">
				<div className="single_team">
					<div className="img_container">
						<img src={Team1} alt="Team1" />
					</div>
					<h2>{texts.subtitle_a}</h2>
					<p>{texts.item_a}</p>
				</div>

				<div className="single_team">
					<div className="img_container">
						<img src={Team2} alt="Team1" />
					</div>
					<h2>{texts.subtitle_b}</h2>
					<p>{texts.item_b}</p>
				</div>

				<div className="single_team">
					<div className="img_container">
						<img src={Team3} alt="Team1" />
					</div>
					<h2>{texts.subtitle_c}</h2>
					<p>{texts.item_c}</p>
				</div>
			</div>
		</div>
	)
}

export default Team
