import React, { useState } from "react";
import "./SignInForm.css";
import ErrorModal from "../UI/ErrorModal";
import { Link } from "react-router-dom";

const SignInForm = (props) => {
	const [enteredUsername, setUserName] = useState("");
	const [enteredPassword, setPassword] = useState("");
	const [error, setError] = useState();

	const signInHandler = (event) => {
		event.preventDefault();
		if (
			enteredUsername.trim().length === 0 ||
			enteredPassword.trim().length === 0
		) {
			setError({
				title: "Invalid input",
				message:
					"Please enter a valid Username and Password (non-empty values).",
			});
			return;
		}

		props.onSignIn(enteredUsername, enteredPassword);
		setUserName("");
		setPassword("");
	};
	const userNameHandler = (event) => {
		setUserName(event.target.value);
	};
	const passwordHandler = (event) => {
		setPassword(event.target.value);
	};
	const errorHandler = () => {
		setError(null);
	};
	return (
		<div className="signin-container">
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<form className="Form1" onSubmit={signInHandler}>
				<div className="company-name">
					la casa <span>de</span> papel
				</div>
				<label className="label" htmlFor="usrname">
					Username
				</label>
				<input
					type="text"
					value={enteredUsername}
					onChange={userNameHandler}
					name="Name"
					className="user-name"
					required
				/>
				<label className="label" htmlFor="psw">
					Password
				</label>
				<input
					type="password"
					value={enteredPassword}
					onChange={passwordHandler}
					id="psw"
					name="psw"
					pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
					title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
					required
				/>
				<div className="container-btn">
					<Link to="/Admin/UserData">
						<button className="btn" type="submit" value="submit">
							Sign In
						</button>
					</Link>
					<Link to="/signup">
						<button className="btn">Sign Up</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
