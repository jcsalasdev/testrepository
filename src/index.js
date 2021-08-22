import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthProvider from "./context/UseAuth/UseAuth";
import UsersProvider from "./context/UsersProvider/UsersProvider";

ReactDOM.render(
	<UsersProvider>
		<AuthProvider>
			<App />
		</AuthProvider>
	</UsersProvider>,
	document.getElementById("root")
);
