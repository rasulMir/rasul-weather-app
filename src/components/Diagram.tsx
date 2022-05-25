import { useEffect, useState } from 'react';
import React from 'react';
import Chart from 'react-apexcharts';
import { IListItem } from '../types';

const filterDays = (list: IListItem[], num: number): IListItem[] => {
	const dayDate = list[num].dt_txt.split(' ')[0];
	console.log(dayDate);
	return list.filter(i => (i.dt_txt.split(' ')[0] == dayDate));
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
	}, [ dayNum, list ]);

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