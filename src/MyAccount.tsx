import React, { useEffect, useState } from "react";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";

export const MyAccount = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const token: string = window.localStorage.getItem("token");

	return (
		<div>
			{token && loggedIn ? (
				<Dashboard setLoggedIn={(value) => setLoggedIn(value)} />
			) : (
				<Login setLoggedIn={(value) => setLoggedIn(value)} />
			)}
		</div>
	);
};
