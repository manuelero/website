import Tofu from '../assets/Tofu.png'
import TwitterImg from '../assets/TwitterImg.png'
import Discord from '../assets/discord.png'

const Footer = () => {
	return (
		<div className="footer">
			<div className="grouped-icons">
				<a className="icon" target="_blank" rel="noreferrer" href="https://discord.gg/S5mM2BjsTp">
					<img src={Discord} alt="discord" />
				</a>
				<a className="icon" target="_blank" rel="noreferrer" href="https://twitter.com/ShapeMonsters">
					<img src={TwitterImg} alt="twitter" />
				</a>
			</div>
			<a className="subscribe">
			<button>
				subscribe
			</button>
			Join the brrrrotherhood
			</a>
		</div>
	)
}

export default Footer
