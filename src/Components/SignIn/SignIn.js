import SignInForm from "./SignInForm";
import Home from "../homepage/home";
import "./SignIn.css";
import { useAuth } from "../../context/UseAuth/UseAuth";
import { Redirect } from "react-router-dom";

function SignIn() {
	const user = useAuth();
	if (user) {
		return <Redirect to="/" />;
	}

	return (
		<div className="SignInForm-con">
			<Home />
			<SignInForm />
		</div>
	);
}
export default SignIn;
