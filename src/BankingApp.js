import Deposit from "./Components/Deposit/Deposit";
import Transfer from "./Components/Transfer/Transfer";
import Withdraw from "./Components/Withdraw/Withdraw";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import NavBar from "./Components/Nav/NavBar";
import Aside from "./Components/AsideNav/Aside";
import { Route, useRouteMatch } from "react-router-dom";

const usersList = [
	{
		name: "hello",
		balance: "3000",
		email: "mail@mail.com",
		id: "12321",
	},
];
const BankingApp = () => {
	const { url } = useRouteMatch();
	return (
		<div>
			<NavBar />
			<div className="rendered-container">
				<Aside />

				<div>
					<Route exact path={`${url}/transfer`} component={Deposit} />
					<Route exact path={`${url}/deposit`} component={Transfer} />
					<Route exact path={`${url}/withdraw`} component={Withdraw} />
					<Route exact path={`${url}/add-user`}>
						<AddUser onAddUser={() => {}} />
					</Route>

					<UsersList users={usersList} />
				</div>
			</div>
		</div>
	);
};
export default BankingApp;
