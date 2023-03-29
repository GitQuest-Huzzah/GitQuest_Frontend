import React, { useEffect, useState } from "react";
import axios from "axios";

export const Dashboard = ({ token }) => {
  const [user, setUser] = useState(null)
  console.log(token, 'token in dashboard')
	const fetchData = async () => {
		const response = await axios.get(
			"https://gitgoingslackbot.uc.r.appspot.com/api/auth/me",
			{ headers: { authorization: token } }
		);
		console.log(response);
    setUser(response)
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
  <div>{user}</div>
  );
};
