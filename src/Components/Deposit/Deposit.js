import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./Deposit.module.css";

const Deposit = (props) => {
	const [clientID, setClientID] = useState("");
	const [depositAmount, setDepositAmount] = useState("");
	const [error, setError] = useState();

	const depositHandler = (event) => {
		event.preventDefault();

		if (clientID.trim().length === 0 || depositAmount.trim().length === 0) {
			setError({
				title: "Invalid input",
				message:
					"Please enter a valid ID#  and deposit amount (non-empty values).",
			});
			return;
		}

		if (depositAmount < 10) {
			setError({
				title: "Invalid amount",
				message: "Please enter a valid deposit amount (> 10$).",
			});
			return;
		}
		props.onDeposit(clientID, depositAmount);

		setClientID("");
		setDepositAmount("");
	};

	const clientIDHandler = (event) => {
		setClientID(event.target.value);
	};

	const depositeAmountHandler = (event) => {
		setDepositAmount(event.target.value);
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
				<form onSubmit={depositHandler}>
					<div>
						<label htmlFor="ID">Client ID</label>
						<input
							id="ID"
							type="number"
							value={clientID}
							onChange={clientIDHandler}
						/>
					</div>
					<div>
						<label htmlFor="amount">Deposit Amount</label>
						<input
							id="currency"
							type="number"
							value={depositAmount}
							onChange={depositeAmountHandler}
						/>
					</div>

					<Button type="submit">Deposit</Button>
				</form>
			</Card>
		</div>
	);
};

export default Deposit;
