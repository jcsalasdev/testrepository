export default function reducerFn(state, action) {
	switch (action.type) {
		case "add": {
			const copy = state.map((user) => {
				return { ...user };
			});
			copy.push(action.payload);
			return copy;
		}
		case "deposit": {
			return state;
		}
		case "transfer": {
			return state;
		}
		case "withdraw": {
			return state;
		}
	}
}
