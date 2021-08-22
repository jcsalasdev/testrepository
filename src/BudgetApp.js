import React, { useState, useEffect } from "react";

import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const BudgetApp = () => {
	const [expenses, setExpenses] = useState([
		{
			id: "e1",
			title: "Shotgun",
			amount: 200.12,
			date: new Date(2021, 7, 14),
		},
	]);

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

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default BudgetApp;
