import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpForm.css";

const SignUpForm = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const signUpHandler = (event) => {
		event.preventDefault();
		props.onSignUp(name, email, username, password);
		setUserName("");
		setPassword("");
	};

	const nameChangeHandler = (event) => {
		setName(event.target.value);
	};

	const emailChangeHandler = (event) => {
		setEmail(event.target.value);
	};

	const userNameChangeHandler = (event) => {
		setUserName(event.target.value);
	};
	const passwordChangeHandler = (event) => {
		setPassword(event.target.value);
	};

	return (
		<div className="signup-container">
			<form className="Form2" onSubmit={signUpHandler}>
				<div className="company-name1">
					la casa <span>de</span> papel
				</div>
				<label className="label2" htmlFor="name">
					Name
				</label>
				<input
					type="text"
					name="Name"
					className="full-name"
					onChange={nameChangeHandler}
					value={name}
					required
				/>
				<label className="label2" htmlFor="email">
					Email
				</label>
				<input
					type="email"
					name="Email"
					className="user-email"
					onChange={emailChangeHandler}
					value={email}
					required
				/>
				<label className="label2" htmlFor="usrname">
					Username
				</label>
				<input
					type="text"
					name="Name"
					className="user-name"
					onChange={userNameChangeHandler}
					value={username}
					required
				/>
				<label className="label2" htmlFor="psw">
					Password
				</label>
				<input
					type={"password"}
					id="psw"
					name="psw"
					onChange={passwordChangeHandler}
					value={password}
					pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
					title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
					required
				/>
				<div className="container-btn">
					<Link to="/">
						<button className="btn2" type="submit" value="submit">
							Sign Up
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
