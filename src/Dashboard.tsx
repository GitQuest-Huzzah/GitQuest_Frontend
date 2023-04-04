import React, { useEffect, useState } from "react";
import axios from "axios";
import { DashboardProps } from "./Interfaces";
export const Dashboard = ({ token }: DashboardProps) => {
	const [user, setUser] = useState(null);
	console.log(token, "token in dashboard");
	
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://gitgoingslackbot.uc.r.appspot.com/api/auth/me",
				{ headers: { authorization: token } }
			);
			console.log(response);
			setUser(response);
		};
		fetchData();
	},[token]);

	return <div>{user ? user.data.email : "THEIR IS NO USER"}</div>;
};
