import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./Transfer.module.css";
import useDispatchUsers from "../../context/UsersProvider/useDispatchUsers";

const Transfer = () => {
	const [fromID, setFromID] = useState("");
	const [toID, setToID] = useState("");
	const [transferAmount, setTransferAmount] = useState("");
	const [error, setError] = useState();
	const userDispatcher = useDispatchUsers();

	const transferHandler = (event) => {
		event.preventDefault();
		if (
			toID.trim().length === 0 ||
			fromID.trim().length === 0 ||
			transferAmount.trim().length === 0
		) {
			setError({
				title: "Invalid input",
				message:
					"Please enter a valid name  and transfer amount (non-empty values).",
			});
			return;
		}
		if (transferAmount < 5) {
			setError({
				title: "Invalid amount",
				message: "Please enter a valid amount (> 5$).",
			});
			return;
		}
		userDispatcher({
			type: "transfer",
			payload: { to: toID, from: fromID, amount: transferAmount },
		});
		setToID("");
		setFromID("");
		setTransferAmount("");
	};

	const fromIDHandler = (event) => {
		setFromID(event.target.value);
	};
	const toIDHandler = (event) => {
		setToID(event.target.value);
	};

	const transferAmountHandler = (event) => {
		setTransferAmount(event.target.value);
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
				<form onSubmit={transferHandler}>
					<div>
						<label htmlFor="id1">From ID#</label>
						<input
							id="id1"
							type="text"
							value={fromID}
							onChange={fromIDHandler}
						/>
					</div>
					<div>
						<label htmlFor="ID">to ID</label>
						<input id="ID" type="number" value={toID} onChange={toIDHandler} />
					</div>
					<div>
						<label htmlFor="amount">Transfer Amount</label>
						<input
							id="currency"
							type="number"
							value={transferAmount}
							onChange={transferAmountHandler}
						/>
					</div>

					<Button type="submit">Transfer</Button>
				</form>
			</Card>
		</div>
	);
};

export default Transfer;
