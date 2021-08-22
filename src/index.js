import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UsersProvider from "./context/UsersProvider/UsersProvider";

ReactDOM.render(
	<UsersProvider>
		<App />
	</UsersProvider>,
	document.getElementById("root")
);
