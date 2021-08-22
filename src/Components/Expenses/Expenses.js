import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
	const expenseItems = [];
	for (let i = 0; i < props.items.length; i++) {
		expenseItems.push(
			<ExpenseItem
				key={props.items[i].id}
				title={props.items[i].title}
				amount={props.items[i].amount}
				date={new Date(props.items[i].date)}
			/>
		);
	}

	return (
		<div>
			<div className="expenses">{expenseItems}</div>
		</div>
	);
};

export default Expenses;
