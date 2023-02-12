import React, { useEffect } from "react";
import background from './assets/stonebackground.svg';
import * as d3 from "d3";
export const QuestActivity = ({ activityStats }) => {
	console.log(activityStats)
	const highestValue = activityStats.map((stat)=> stat.questQuantity)
	const domainRange = Math.max(...highestValue)
	useEffect(() => {
		drawChart();
	},[]);

	const width = 400;
	const height = 500;
	const margin = { top: 70, bottom: 30, left: 50, right: 50 };
	const drawChart = () => {
		const svg = d3
			.select("#chart")
			.append("svg")
			.attr("height", height - margin.top - margin.bottom)
			.attr("width", width - margin.left - margin.right)
			.attr("viewBox", [0, 0, width, height])
			.style('border-radius','3px')
			.attr("transform","translate(0,-40)")
			.attr('class', 'h-[31rem] w-auto')

		svg.append('image')
			.attr('xlink:href', background)
			.attr('width',580)
			.attr('height',580)
			.attr("transform","translate(-15,-5)")
			
		const x = d3.scaleBand()
			.domain(d3.range(activityStats.length))		
			.range([margin.left, width - margin.right])
			.padding(0.1);

		const y = d3.scaleLinear()
			.domain([0,domainRange])
			.range([height - margin.bottom, margin.top]);

		svg
			.append('g')
			.attr('fill', 'crimson')
			.selectAll('rect')
			.data(activityStats.sort((a,b) => d3.descending(a.questQuantity, b.questQuantity)))
			.join('rect')
			.attr('x', (d,i) => x(i))
			.attr('y', (d) => y(d.questQuantity))
			.attr('height', d => y(0) - y(d.questQuantity))
			.attr('width', x.bandwidth())

		const xAxis = (g) => {
			g.attr('transform', `translate(0, ${height - margin.bottom})`)
			.call(d3.axisBottom(x).tickFormat(i => activityStats[i].name))
			.selectAll('.tick text')
			.attr('color', 'goldenrod')
			.attr('font-size', '1.3em')
			.attr('font-family', 'MedievalTimes')
			.attr('transform', `rotate(25)translate(0,-20)`)

		}
		const yAxis = (g) => {
			g.attr('transform', `translate(${margin.left},0)`)
			.call(d3.axisLeft(y).ticks(null, activityStats.format))
			.attr('font-size', '1.5em')
			.attr('color', 'goldenrod')
			.attr('font-family', 'MedievalTimes')
		}
		svg.append('g').call(xAxis);
		svg.append('g').call(yAxis);
	};
	return <section id={"chart"}></section>;
};
