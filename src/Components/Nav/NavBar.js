import "./NavBar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div className="Nav-container">
			<ul className="Nav-container_ul">
				<li className="name">Admin</li>
				<Link to="/" style={{ textDecoration: "none", color: "white" }}>
					<li className="sign-out">Sign Out</li>
				</Link>
			</ul>

			<div className="logo">
				—<img src={logo} alt="Logo" />—
			</div>

			<div className="company">
				la casa <span>de</span> papel
			</div>
		</div>
	);
}

export default NavBar;
