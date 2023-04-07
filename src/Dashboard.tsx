import React, { useEffect, useState } from "react";
import axios from "axios";
import { submitButton } from "./cssClasses";
import { LoginProps, InfoList } from "./Interfaces";
export const Dashboard = ({ setLoggedIn }: LoginProps) => {
	const [user, setUser] = useState(null);
	const [infoList, setInfoList] = useState(null);
	const token = window.localStorage.getItem("token");
	const logOut = () => {
		window.localStorage.removeItem("token");
		setLoggedIn(false);
	};
	useEffect(() => {
		if (user && infoList) {
			console.log(user, "user", infoList, "infolist");
			return;
		}
		if (!user) {
			axios
				.get("https://gitgoingslackbot.uc.r.appspot.com/api/auth/me", {
					headers: { authorization: token },
				})
				.then(setUser);
		}
		if (user && !infoList) {
			axios
				.get("https://gitgoingslackbot.uc.r.appspot.com/api/auth/me/list", {
					headers: { authorization: token },
				})
				.then(setInfoList);
		}
	}, [token, user, infoList]);
	return (
		<div>
			{/* {user && user.data.length() ? user.data.email : null}
			{infoList && infoList.data.length()
				? infoList.data.map((info: InfoList) => (
						<div key={`this is team ${info.id}`}>
							<h3>Organization Name: {info.orgName}</h3>
							<h3>Team Name: {info.teamName}</h3>
						</div>
				  ))
				: null} */}
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
