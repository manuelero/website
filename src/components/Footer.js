import TwitterImg from '../assets/TwitterImg.png'
import Discord from '../assets/discord.png'
import React, {useState} from "react"

const Footer = () => {
	const [inputText, setInputText] = useState("Join the brrrrotherhood")

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
			<div className="subscribe">
				<button>
					subscribe
				</button>

				<input value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
			</div>
		</div>
	)
}

export default Footer
