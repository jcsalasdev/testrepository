import { useState } from "react";
import SignUpForm from "./SignUpForm";
import Home from "../homepage/home";
import "./SignUp.css";
function SignUp() {
	const [adminUsers, setAdminUsers] = useState([
		{
			name: "jc",
			email: "jcdev@gmail.com",
			username: "jcdev",
			password: "Admin123",
		},
	]);

	const onSignUpHandler = (adminUser) => {
		console.log(setAdminUsers([...adminUsers, adminUser]));
	};
	return (
		<div className="SignUpForm-con">
			<Home />
			<SignUpForm onSignUp={onSignUpHandler} />
		</div>
	);
}
export default SignUp;
