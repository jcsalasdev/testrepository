import { useState } from "react";
import SignUpForm from "./SignUpForm";
import Home from "../homepage/home";
import "./SignUp.css";
function SignUp() {
	return (
		<div className="SignUpForm-con">
			<Home />
			<SignUpForm />
		</div>
	);
}
export default SignUp;
