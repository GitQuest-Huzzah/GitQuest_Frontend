import React, { useEffect } from "react";
import * as d3 from 'd3';
export const QuestActivity = ({activityStats}) => {
	useEffect(() => {
		drawChart();
	});
	const drawChart = () => {
		const data = activityStats
		const labels = Object.keys(data);
		const totals = Object.values(data);
		const svg = d3
			.select("body")
			.append("svg")
			.attr("width", 700)
			.attr("height", 300);

		svg
			.selectAll("rect")
			.data(totals)
			.enter()
			.append("rect")
			.attr("x", (d, i) => i * 70)
			.attr("y", (d, i) => 300 - 10 * d)
			.attr("width", 65)
			.attr("height", (d, i) => d * 10)
			.attr("fill", "green");
		svg
			.selectAll("text")
			.data(labels)
			.enter()
			.append("text")
			.text((d) => d)
			.attr("x", (d, i) => i * 70)
			.attr("y", (d, i) => 300 - 30);
	};
	return <div id={"chart"}></div>;
};
// 	return (
// 		<div className="w-full mx-auto text-4xl font-extrabold leading-none text-lef  sm:text-5xl md:text-7xl text-gray-500 uppercase p-20">
// 			hello world
// 			{Object.entries(activityStats).map(([key,value]) => <div>{key},{value}</div>)}
// 		</div>
// 	);
// };
