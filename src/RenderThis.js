import React from "react";
import { useSearchParams } from "react-router-dom";
import { PlayerProfile } from "./PlayerProfile";
import { QuestLog } from "./QuestLog";
export const RenderThis = () => {
	const [query] = useSearchParams();
	const queryParams = {};
	query.forEach((value, key) => {
		queryParams[key] = value;
	});
	const cards = {
		profile: PlayerProfile,
		questlog: QuestLog,
	};

	const ComponentToRender = cards[queryParams.component];

	return (
		<div>
			<ComponentToRender {...queryParams} />
		</div>
	);
};
