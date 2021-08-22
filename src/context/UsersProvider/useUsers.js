import { useContext } from "react";
import { stateContext } from "./UsersProvider";

export default function useUsers() {
	return useContext(stateContext);
}
