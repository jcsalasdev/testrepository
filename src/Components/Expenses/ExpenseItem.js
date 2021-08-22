import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	return (
		<Card className="expense-item">
			<div className="expense-item__title">
				<ExpenseDate date={props.date} />
				<h2>{props.title}</h2>
			</div>
			<div className="expense-item__price">
				{Number(props.amount).toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
				})}
			</div>

			{/* <button className="fas fa-trash-alt expense-item__btn" /> */}
		</Card>
	);
};

export default ExpenseItem;
