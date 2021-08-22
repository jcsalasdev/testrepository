import React, { useState, useEffect } from "react";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import NavBar from "./Components/Nav/NavBar";
import Aside from "./Components/AsideNav/Aside";
import AddUser from "./Components/Users/AddUser";
import Deposit from "./Components/Deposit/Deposit";
import Transfer from "./Components/Transfer/Transfer";
import Withdraw from "./Components/Withdraw/Withdraw";
import UsersList from "./Components/Users/UsersList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BudgetApp from "./BudgetApp";
import "./style.css";
import BankingApp from "./BankingApp";
import BudgetApp2 from "./BudgetApp2";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (uName, uBalance, uEmail) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{
					name: uName,
					balance: uBalance,
					email: uEmail,
					id: Math.floor(1000 + Math.random() * 9000).toString(),
				},
			];
		});
	};

	useEffect(() => {
		const usersList = JSON.parse(localStorage.getItem("usersList"));
		if (usersList) {
			setUsersList(usersList);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("usersList", JSON.stringify(usersList));
	}, [usersList]);

	return (
		<Router>
			<div>
				<Switch>
					<Route path="/test" component={BankingApp} />
					<Route path="/budget" component={BudgetApp2} />
					<Route exact path="/">
						<SignIn />
					</Route>
					<Route path="/signup">
						<SignUp />
					</Route>

					<Route path="/Admin">
						<NavBar />
						<div className="rendered-container">
							<Aside />
							<Route path="/Admin/BudgetApp" component={BudgetApp} />

							<div>
								<Route
									exact
									path="/Admin/UserData/Deposit"
									component={Deposit}
								/>
								<Route
									exact
									path="/Admin/UserData/Transfer"
									component={Transfer}
								/>
								<Route
									exact
									path="/Admin/UserData/Withdraw"
									component={Withdraw}
								/>
								<Route exact path="/Admin/UserData/Add-user">
									<AddUser onAddUser={addUserHandler} />
								</Route>
								<Route path="/Admin/UserData">
									<UsersList users={usersList} />
								</Route>
							</div>
						</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
