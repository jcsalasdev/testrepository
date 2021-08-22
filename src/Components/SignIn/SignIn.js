import SignInForm from "./SignInForm";
import Home from "../homepage/home";
import "./SignIn.css";

function SignIn() {
	return (
		<div className="SignInForm-con">
			<Home />
			<SignInForm />
		</div>
	);
}
export default SignIn;
