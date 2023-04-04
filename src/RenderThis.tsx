import React from "react";
import { useSearchParams } from "react-router-dom";
import { PlayerProfile } from "./PlayerProfile";
import { QuestActivity } from "./QuestActivity";
import { Buffer } from "buffer/";
export const RenderThis = () => {
	interface RenderThisType {
		component: string;
	}
	const [query] = useSearchParams();
	const decodeQuery = Buffer.from(query.toString(), "base64").toString("utf-8");
	const parsedQuery: RenderThisType = JSON.parse(decodeQuery);

	const cards = {
		profile: PlayerProfile,
		questActivity: QuestActivity,
	};

	const ComponentToRender = cards[parsedQuery.component];

	return (
		<div>
			<ComponentToRender {...parsedQuery} />
		</div>
	);
};
