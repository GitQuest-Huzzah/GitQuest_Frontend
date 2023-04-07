import React, { useEffect, useState } from "react";
import axios from "axios";
import { submitButton } from "./cssClasses";
import { LoginProps } from "./Interfaces";
export const Dashboard = ({ setLoggedIn }: LoginProps) => {
	const [user, setUser] = useState(null);
	const [infoList, setInfoList] = useState(null);
	const token = window.localStorage.getItem("token");
	const logOut = () => {
		window.localStorage.removeItem("token");
		setLoggedIn(false);
	};
	useEffect(() => {
		if (user && infoList){
			return
		}
		if (!user) { axios.get(
					"https://gitgoingslackbot.uc.r.appspot.com/api/auth/me",
					{ headers: { authorization: token } }
				).then(setUser);
		}
		if (user && !infoList) {axios.get(
					"https://gitgoingslackbot.uc.r.appspot.com/api/auth/me/list",
					{ headers: { authorization: token } }
				).then(setInfoList)
			}

		console.log(setInfoList)
	}, [token, user]);
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
