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
			{user ? (
				<div>
					<h2>Email:{user.data.email}</h2>{" "}
					<h2>GitHub:{user.data.gitHubLogin}</h2>
				</div>
			) : null}
			{infoList ? (
				<div>
					<h3>Organization Name: {infoList.data.orgName}</h3>
					<h3>Team Name: {infoList.data.teamName}</h3>
				</div>
			) : null}
			{infoList
				? infoList.data.users.map((user) =>
						user.gitHubLogin ? (
							<li key={`user id ${user.id}`}>
								<div>{user.gitHubLogin ? user.gitHubLogin : null}</div>
							</li>
						) : null
				  )
				: null}
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
