import React, { useState } from "react";
import "./SignInForm.css";
import ErrorModal from "../UI/ErrorModal";
import { Link, useHistory } from "react-router-dom";
import useUsers from "../../context/UsersProvider/useUsers";
import { useAuthDispatch } from "../../context/UseAuth/UseAuth";

const SignInForm = (props) => {
	const users = useUsers();
	const history = useHistory();
	const authDispatcher = useAuthDispatch();
	const [enteredEmail, setEmail] = useState("");
	const [enteredPassword, setPassword] = useState("");
	const [error, setError] = useState();

	const signInHandler = (event) => {
		event.preventDefault();
		if (
			enteredEmail.trim().length === 0 ||
			enteredPassword.trim().length === 0
		) {
			setError({
				title: "Invalid input",
				message:
					"Please enter a valid Username and Password (non-empty values).",
			});
			return;
		}
		const foundUser = users.find(function (user) {
			return user.email === enteredEmail;
		});
		if (!foundUser) {
			setError({
				title: "Invalid input",
				message: "Email not found.",
			});
			return;
		}

		if (foundUser.password !== enteredPassword) {
			setError({
				title: "Invalid input",
				message: "Wrong password.",
			});
			return;
		}
		authDispatcher({ type: "login", payload: foundUser });
		history.push("/");
		setEmail("");
		setPassword("");
		setError(null);
	};
	const emailHandler = (event) => {
		setEmail(event.target.value);
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
					Email
				</label>
				<input
					type="email"
					value={enteredEmail}
					onChange={emailHandler}
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
					title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
					required
				/>
				<div className="container-btn">
					<button className="btn" type="submit" value="submit">
						Sign In
					</button>

					<Link to="/signup">
						<button className="btn">Sign Up</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
