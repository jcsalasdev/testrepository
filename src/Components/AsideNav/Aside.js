import "./Aside.css";
import { Link, useRouteMatch } from "react-router-dom";
function Aside() {
	const { url } = useRouteMatch();
	return (
		<div className="Aside-container">
			<Link to={`${url}/deposit`}>
				<button className="send-money">Deposit</button>
			</Link>

			<Link to={`${url}/transfer`}>
				<button> Transfer</button>
			</Link>

			<Link to={`${url}/withdraw`}>
				<button>Withdraw</button>
			</Link>

			<Link to={`${url}/add-user`}>
				<button className="Accounts">
					Accounts <i className="fas fa-plus-circle"></i>
				</button>
			</Link>
		</div>
	);
}

export default Aside;
