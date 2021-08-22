import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import useDispatchUsers from "../../context/UsersProvider/useDispatchUsers";
import generateID from "../../helpers/generateID";

const AddUser = () => {
	const usersDispatcher = useDispatchUsers();
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		if (
			name.trim().length === 0 ||
			amount.trim().length === 0 ||
			email.trim().length === 0
		) {
			setError({
				title: "Invalid input",
				message:
					"Please enter a valid name email and amount (non-empty values).",
			});
			return;
		}
		if (amount < 50) {
			setError({
				title: "Invalid amount",
				message: "Please enter amount (> 50$).",
			});
			return;
		}
		usersDispatcher({
			type: "add",
			payload: { id: generateID(), password: "123" },
		});
		setName("");
		setAmount("");
		setEmail("");
	};

	const nameChangeHandler = (event) => {
		setName(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setAmount(event.target.value);
	};
	const emailChangeHandler = (event) => {
		setEmail(event.target.value);
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
							value={name}
							onChange={nameChangeHandler}
						/>
					</div>
					<div>
						<label htmlFor="Email">Email</label>
						<input
							id="email"
							type="email"
							value={email}
							onChange={emailChangeHandler}
						/>
					</div>
					<div>
						<label htmlFor="amount">Amount</label>
						<input
							id="currency"
							type="number"
							value={amount}
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
