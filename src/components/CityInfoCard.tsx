import { Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { StyledPaper, StyledBox, StyledBoxTop } from './AllStyles';

import { ICity, IListItem } from '../types';
import { WiDayRain, WiDaySnow, WiDayCloudyGusts, WiSunrise } from "react-icons/wi";

import { filterList, getDate, getIcon } from '../features/common';



const iconsList = [ <WiDayRain size={34} />, <WiDaySnow size={34} />,<WiDayCloudyGusts size={34} />, <WiSunrise size={34} /> ];


interface Props {
	list: IListItem[],
	city: ICity,
	listNum: number,
}
export default function CityInfoCard({ list, city, listNum }: Props) {

	const filteredDay = useMemo(() => filterList(list), [list]);
	const date = useMemo(() => getDate(filteredDay[listNum].dt_txt), [filteredDay[listNum]])
	const weatherIcon = useMemo(() => getIcon(filteredDay[listNum].weather[0].main, iconsList), [filteredDay[listNum].weather[0].main])



	return (
		<StyledPaper elevation={0} variant="outlined" >
			<StyledBox>
				<StyledBoxTop>
					{ weatherIcon }
					<div style={{ padding: '0 0 0 10px' }}>
						<Typography
							variant='body2'
							component='div'
							textAlign='center'
						>
							Среднесуточная t<sup>o</sup>
						</Typography>
						<Typography
							variant='h4'
							component='div'
							sx={{ flex: ' 0 0 100%' }}
							textAlign='center'
						>
							{ filteredDay[listNum].main.temp } <sup style={{ fontSize: '.6em' }}><sup>o</sup>C</sup>
						</Typography>
					</div>
					
				</StyledBoxTop>
				<Typography component='div' variant='body2'>
					Вероятность осадков: { filteredDay[listNum].clouds.all }%
				</Typography>
				<Typography component='div' variant='body2'>
					Влажность: { filteredDay[listNum].main.humidity }%
				</Typography>
				<Typography component='div' variant='body2'>
					Ветер: { filteredDay[listNum].wind.speed } м/с
				</Typography>
			</StyledBox>
			<StyledBox>
				<Typography
					variant='h4'
					component='div'
					sx={{ flex: ' 0 0 100%' }}
					textAlign='right'
				>
					{city.name}, { city.country }
				</Typography>
				<Typography textAlign='right' component='div' variant='body2'>
					Население: { city.population }
				</Typography>
				<Typography textAlign='right' component='div' variant='body2'>
					{ date }
				</Typography>
				<Typography textAlign='right' component='div' variant='body2'>
					{ filteredDay[listNum].weather[0].description }
				</Typography>
			</StyledBox>
		</StyledPaper>
	)
}