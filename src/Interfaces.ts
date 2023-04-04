import { ReactNode } from "react";

export interface DashboardProps {
	token: string;
}
export interface ThanksProps {
	email?: string;
}
export interface FAQProps {
	answer: ReactNode;
	question: string;
}
export interface LoginProps {
	setToken: (token: string) => void;
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

export interface QuestActivityProps{
	activityStats:{
		questQuantity:number;
		name: string;
	}[]
}