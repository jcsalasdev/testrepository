import "./Aside.css";
import { Link, useRouteMatch } from "react-router-dom";
function Aside() {
	const { url } = useRouteMatch();
	return (
		<div className="Aside-container">
			<Link to={`${url}/transfer`}>
				<button className="send-money">Transfer</button>
			</Link>

			<Link to={`${url}/deposit`}>
				<button> Deposit</button>
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
