import { ReactNode } from "react";

export interface ThanksProps {
	email?: string;
}
export interface FAQProps {
	answer: ReactNode;
	question: string;
}
export interface LoginProps {
	setLoggedIn: (value: boolean) => void;
}
export interface PlayerProfileProps {
	gold: number;
	level: number;
	rank: string;
	reward: number;
	user: string;
	xp: number;
}
export interface SlackButtonProps {
	email: string;
}

export interface QuestActivityProps {
	activityStats: {
		questQuantity: number;
		name: string;
	}[];
}

export interface InfoList {
	orgName: string;
	teamName: string;
	id: number;
}

export interface UserInfo {
	gitHubLogin: string;
	email?: string;
}
