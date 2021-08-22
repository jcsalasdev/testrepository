import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredEmail, setEnteredEmail] = useState("");
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		if (
			enteredName.trim().length === 0 ||
			enteredAmount.trim().length === 0 ||
			enteredEmail.trim().length === 0
		) {
			setError({
				title: "Invalid input",
				message:
					"Please enter a valid name email and amount (non-empty values).",
			});
			return;
		}
		if (enteredAmount < 50) {
			setError({
				title: "Invalid amount",
				message: "Please enter amount (> 50$).",
			});
			return;
		}
		props.onAddUser(enteredName, enteredAmount, enteredEmail);
		setEnteredName("");
		setEnteredAmount("");
		setEnteredEmail("");
	};

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};
	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<div>
						<label htmlFor="name">Name</label>
						<input
							id="name"
							type="text"
							value={enteredName}
							onChange={nameChangeHandler}
						/>
					</div>
					<div>
						<label htmlFor="Email">Email</label>
						<input
							id="email"
							type="email"
							value={enteredEmail}
							onChange={emailChangeHandler}
						/>
					</div>
					<div>
						<label htmlFor="amount">Amount</label>
						<input
							id="currency"
							type="number"
							value={enteredAmount}
							onChange={amountChangeHandler}
						/>
					</div>

					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
