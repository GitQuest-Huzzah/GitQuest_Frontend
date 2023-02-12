import React, { useEffect } from "react";
import * as d3 from "d3";
export const QuestActivity = ({ activityStats }) => {
	useEffect(() => {
		drawChart();
	});
	const drawChart = () => {
		const data = activityStats;
		const labels = data.map((entry) =>
			entry.name.concat(": " + entry.questQuantity)
		);
		const totals = data.map((entry) => entry.questQuantity);
		const svg = d3
			.select(".chart")
			.append("svg")
			.attr("width", totals.length * 110)
			.attr("height", totals.length * 100)
			.style("border", "1px solid white");

		svg
			.selectAll("rect")
			.data(totals)
			.enter()
			.append("rect")
			.attr("x", (d, i) => i * (40 * totals.length))
			.attr("y", (d, i) => 300 - 10 * d)
			.attr("width", 95)
			.attr("height", (d, i) => d * 10)
			.style("fill", "goldenrod");
		svg
			.selectAll("text")
			.style("fill", "white")
			.data(labels)
			.enter()
			.append("text")
			.text((d) => d)
			.attr("x", (d, i) => i * (40 * totals.length))
			.attr("y", (d, i) => 300 - 5);
	};
	return <div className={"chart"}></div>;
};
