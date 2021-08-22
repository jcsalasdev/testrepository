import { createContext, useReducer, useContext } from "react";
const initialState = null;
const dispatchContext = createContext();
const stateContext = createContext();

export default function AuthProvider(props) {
	const [state, dispatch] = useReducer(authReducer, initialState);
	return (
		<stateContext.Provider value={state}>
			<dispatchContext.Provider value={dispatch}>
				{props.children}
			</dispatchContext.Provider>
		</stateContext.Provider>
	);
}

export function useAuth() {
	return useContext(stateContext);
}

export function useAuthDispatch() {
	return useContext(dispatchContext);
}

function authReducer(state, action) {
	switch (action.type) {
		case "login":
			return action.payload;

		case "logout":
			return state;
	}
}
