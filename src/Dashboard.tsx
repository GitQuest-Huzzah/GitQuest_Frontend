import React, { useEffect, useState } from "react";
import axios from "axios";
export const Dashboard = () => {
	const [user, setUser] = useState(null);
	const token = window.localStorage.getItem("token")
	console.log(token, "token in dashboard");
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://gitgoingslackbot.uc.r.appspot.com/api/auth/me",
				{ headers: { authorization: token } }
			);
			setUser(response);
		};
		fetchData();
	},[token]);

	return <div>{user ? user.data.email : "THEIR IS NO USER"}</div>;
};
