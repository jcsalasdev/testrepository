import { createContext, useReducer } from "react";
import reducerFn from "./UsersReducer";
const initialState = [
	{
		name: "test subject",
		id: 1,
		email: "user1@mail.com",
		password: "User1pass",
		balance: 1000,
	},
];
export const dispatchContext = createContext();
export const stateContext = createContext();

export default function UsersProvider(props) {
	const [state, dispatch] = useReducer(reducerFn, initialState);
	return (
		<stateContext.Provider value={state}>
			<dispatchContext.Provider value={dispatch}>
				{props.children}
			</dispatchContext.Provider>
		</stateContext.Provider>
	);
}
