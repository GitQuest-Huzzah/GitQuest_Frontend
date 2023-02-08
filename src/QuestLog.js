import React from "react";

export const QuestLog = ({ quest, keyword, description, gold, xp, status }) => {
	return (
		<div className="w-full mx-auto text-4xl font-extrabold leading-none text-lef  sm:text-5xl md:text-7xl text-gray-500 uppercase p-20">
			Quest Board
			<br />
			<br />
			quest: {quest}
			<br />
			{keyword}
			<br />
			description: {description}
			<br />
			gold: {gold}
			<br />
			xp: {xp} <br />
			status: {status}
			<br />
		</div>
	);
};
