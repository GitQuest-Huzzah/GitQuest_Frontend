import React from "react";
import scroll from "./assets/nameScroll.svg";

export const PlayerProfile = ({ user, gold, xp, rank }) => {
	return (
		<div className="flex justify-center items-center w-[40rem] h-[40rem]">
			<img
				src={scroll}
				className="h-[40rem] w-fit mx-auto py-2.5 text-4xl text-center font-extrabold p-auto flex justify-center items-center"
				alt="scroll for profile"
			></img>
			<div className="absolute w-auto h-auto text-4xl text-center font-extrabold text-gray-500 uppercase flex justify-center items-center">
				Player Profile
				<br />
				<br />
				User: {user}
				<br />
				Gold: {gold}
				<br />
				XP: {xp}
				<br />
				Rank: {rank}
				<br />
			</div>
		</div>
	);
};
