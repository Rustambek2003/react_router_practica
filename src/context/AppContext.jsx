import React, { useState, useContext } from "react";

const userContext = React.createContext();
const { Provider } = userContext;

const AppContext = ({ children }) => {
	const [user, setUser] = useState(null);
	const value = {
		user,
		setUser,
	};
	return <Provider value={value}>{children}</Provider>;
};
export default AppContext;
export const useAppContext = () => {
	useContext(userContext);
};
