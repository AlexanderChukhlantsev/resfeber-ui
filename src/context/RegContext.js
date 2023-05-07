import { createContext, useReducer } from "react";

const INITIAL_STATE = {
	user: null,
	loading: false,
	error: null,
	status: null,
};

export const RegContext = createContext(INITIAL_STATE);

const RegReducer = (state, action) => {
	switch (action.type) {
		case "REG_START":
			return {
				user: null,
				loading: true,
				error: null,
				status: null,
			};
		case "REG_SUCCESS":
			return {
				user: action.payload,
				loading: false,
				error: null,
				status: "Успешно создан",
			};
		case "REG_FAILURE":
			return {
				user: null,
				loading: false,
				error: action.payload,
				status: null,
			};
    default:
      return state;
  }
};

export const RegContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RegReducer, INITIAL_STATE);

	// useEffect (() => {
	// 	localStorage.setItem("user", JSON.stringify(state.user))
	// },[state.user])
  return (
    <RegContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
				status: state.status,
        dispatch,
      }}
    >
      {children}
    </RegContext.Provider>
  );
};