import React, { useState } from "react";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";

export const MyAccount = () => {
	const [token, setToken] = useState("");

	return (
		<div>
			{token ? (
				<Dashboard token={token} />
			) : (
				<Login setToken={(response) => setToken(response)} />
			)}
		</div>
	);
};
