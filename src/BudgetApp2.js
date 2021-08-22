import React, { useState, useEffect } from "react";

import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";
import NavBar from "./Components/Nav/NavBar";
import "./style.css";
import { useAuth } from "./context/UseAuth/UseAuth";
import { Redirect } from "react-router-dom";

const BudgetApp2 = () => {
	const user = useAuth();
	const balance = user?.balance || 0;
	const [expenses, setExpenses] = useState([
		{
			id: "e1",
			title: "Shotgun",
			amount: 200.12,
			date: new Date(2021, 7, 14),
		},
	]);

	const totalExpenses = expenses.reduce(function fn(prev, curr) {
		return prev + Number(curr.amount);
	}, 0);

	const addExpenseHandler = (expense) => {
		setExpenses([...expenses, expense]);
	};

	useEffect(() => {
		const expenses = JSON.parse(localStorage.getItem("expenses"));
		if (expenses) {
			setExpenses(expenses);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("expenses", JSON.stringify(expenses));
	}, [expenses]);

	if (!user) {
		return <Redirect to="/signin" />;
	}
	if (user.id === "0") {
		return <Redirect to="/admin" />;
	}
	return (
		<>
			<NavBar />
			<div className="rendered-budget">
				<div>
					<NewExpense onAddExpense={addExpenseHandler} />
					<div className="total">
						<div>
							<h3>Remaining Balance</h3>
							<p>
								{Number(balance - totalExpenses).toLocaleString("en-US", {
									style: "currency",
									currency: "USD",
								})}
							</p>
						</div>
						<div>
							<h3>Total Expenses</h3>
							<p>
								{Number(totalExpenses).toLocaleString("en-US", {
									style: "currency",
									currency: "USD",
								})}
							</p>
						</div>
					</div>
					<Expenses items={expenses} />
				</div>
			</div>
		</>
	);
};

export default BudgetApp2;
