import React, { useState } from "react";
import { FAQProps } from "./Interfaces";
const FAQ = ({ question, answer }: FAQProps) => {
	const [show, setShow] = useState(false);

	return (
		<div className="relative overflow-auto border-2 border-gray-400 rounded-lg">
			<h4
				onClick={() => setShow(!show)}
				className="flex items-center justify-between text-lg font-medium text-gray-500 cursor-pointer px-2 py-2"
			>
				<span>{question}</span>
				<svg
					className={`h-6 min-w-fit w-auto`}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					/>
				</svg>
			</h4>
			<div
				className="pt-0 -mt-2 text-gray-500 sm:text-lg py-7 px-7"
				style={{ display: show ? "block" : "none" }}
			>
				{answer}
			</div>
		</div>
	);
};

export default FAQ;
