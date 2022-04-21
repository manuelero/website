import TwitterImg from '../assets/TwitterImg.png'
import discord from '../assets/discord.png'
import Menu from '../assets/menu.png'

const Navbar = () => {
	return (
		<div className="navbar">

			<button className="menu_btn"> 
				<img src={Menu}/>
			</button>
		</div>
	)
}

export default Navbar
