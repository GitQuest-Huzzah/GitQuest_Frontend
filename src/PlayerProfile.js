import React from "react";

export const PlayerProfile = ({ user, gold, xp, rank }) => {
	return (
		<div className='w-full mx-auto text-4xl font-extrabold leading-none text-lef  sm:text-5xl md:text-7xl text-gray-500 uppercase p-20'>
            Player Profile<br/>
            <br/>
			User: {user}<br/>
			Gold: {gold}<br/>
			XP: {xp}<br/>
			Rank: {rank}<br/>
		</div>
	);
};
