import React from "react";

export const PlayerProfile = ({ user, gold, xp, rank }) => {
	return (
		<div>
            Player Profile<br/>
			User:{user}<br/>
			Gold:{gold}<br/>
			XP:{xp}<br/>
			Rank:{rank}<br/>
		</div>
	);
};
