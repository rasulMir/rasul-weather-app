import { useEffect, useState } from 'react';
import React from 'react';
import Chart from 'react-apexcharts';
import { IListItem } from '../types';

const filterDays = (list: IListItem[], num: number): IListItem [] => {
	const DAYS_ON_DISPLAY: number = 6;
	const arrDays: IListItem [][] = [];
	const arrList: IListItem [] = [];
	let count: number = 0;
	for (let i = 0; i < DAYS_ON_DISPLAY; i++) {
		for (let k = count; k < list.length; k++) {
			count++;
			const prevDay = list[k].dt_txt.split(' ')[0];
			const nextDay = !list[k + 1] || list[k + 1].dt_txt.split(' ')[0];
			if (prevDay !== nextDay) {
				arrList.push(list[k]);
				break;
			}
			arrList.push(list[k]);
		}
		const someArr = [...arrList];
		arrDays.push(someArr);
		arrList.length = 0;
	}
	return arrDays[num];
}

interface IOptions {
	chart: {
		id: string
	},
	xaxis: {
		categories: string[]
	},
}

interface ISeries {
	name: string,
	data: number[],
}

interface Props {
	list: IListItem[],
	dayNum: number,
}

const Diagram: React.FC<Props> = ({ list, dayNum }) => {


	const [ options, setOptions ]  = useState<IOptions>({
		chart: { id: 'render '},
		xaxis: {
			categories: ['0', '1']
		}
	});
	const [series, setSeries] = useState<ISeries[]>([
		{
			name: 'name',
			data: [0, 1]
		}
	]);
	
	useEffect(() => {
		const filteredDays = filterDays(list, dayNum);
		setOptions({
			chart: {
				id: "day-weather-bar"
			},
			xaxis: {
				categories: filteredDays.map(i => (i.dt_txt.split(' ')[1].substring(0, 5)))
			},
		});
		setSeries([
			{
				name: "t \'C",
				data: filteredDays.map(i => (i.main.temp)),
			}
		]);
		return;
	}, [ dayNum ]);

	return(
		<div>
			<Chart 
				options={options}
				series={series}
				type='line'
				width="100%"
				height='270px'
			/>
		</div>
	);
} 

export default Diagram;