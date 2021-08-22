import { useContext } from "react";
import { dispatchContext } from "./UsersProvider";

export default function useDispatchUsers() {
	return useContext(dispatchContext);
}
