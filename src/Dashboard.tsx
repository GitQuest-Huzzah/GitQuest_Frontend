import React, { useEffect, useState } from "react";
import axios from "axios";
import { submitButton } from "./cssClasses";
import { LoginProps } from "./Interfaces";
export const Dashboard = ({setLoggedIn}:LoginProps) => {
	const [user, setUser] = useState(null);
	const token = window.localStorage.getItem("token");
	const logOut = () =>{
		window.localStorage.removeItem('token');
		setLoggedIn(false)
	}
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				"https://gitgoingslackbot.uc.r.appspot.com/api/auth/me",
				{ headers: { authorization: token } }
			);
			setUser(response);
		};
		fetchData();
	}, [token]);
	return (
		<div>
			{user ? user.data.email : null}
			<div className="flex items-center flex-col justify-center sm:col-span-2">
				<button
					className={submitButton}
					data-primary="black"
					data-rounded="rounded-full"
					onClick={logOut}
				>
					{" "}
					Log Out{" "}
				</button>
			</div>{" "}
		</div>
	);
};
