import React, { useEffect, useState } from "react";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";

export const MyAccount = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const token: string = window.localStorage.getItem("token");
	useEffect(() => {
		token ? setLoggedIn(true) : setLoggedIn(false);
	}, [token, loggedIn]);

	return (
		<div>
			{token ? (
				<Dashboard setLoggedIn={(value) => setLoggedIn(value)} />
			) : (
				<Login setLoggedIn={(value) => setLoggedIn(value)} />
			)}
		</div>
	);
};
