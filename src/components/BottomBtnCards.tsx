import { Typography } from '@mui/material';
import React, { useMemo } from 'react'
import { getDate, getIcon, filterList } from '../features/common';

import { WiDayRain, WiDaySnow, WiDayCloudyGusts, WiSunrise } from "react-icons/wi";
import { IListItem } from '../types';
import { StyledBottomBtnCards, StyledPaperCard } from './AllStyles';

const iconsList = [ 
	<WiDayRain size={24} />, 
	<WiDaySnow size={24} />,
	<WiDayCloudyGusts size={24} />, 
	<WiSunrise size={24} /> 
];

interface Props {
	list: IListItem[],
	onclick: (num: number) => void,
	dayNum: number,
}

export default function BottomBtnCards({ list, onclick, dayNum }: Props) {

	const filteredList = useMemo(() => filterList(list), [list]);

	return (
		<StyledBottomBtnCards>
			{
				filteredList.map(( item, idx ) => (
					<StyledPaperCard 
						key={idx}
						onClick={() => onclick(idx)} 
						sx={{ backgroundColor:  (dayNum === idx) ? '#3a589d' : '#767F94'}}>
						<Typography variant='body1' textAlign='center'>
							{ getDate(item.dt_txt) }
						</Typography>
						<div>{ getIcon( item.weather[0].main, iconsList) }</div>

						<Typography variant='body1' textAlign='center'>
							{ item.main.temp } <sup style={{ fontSize: '.6em' }}><sup>o</sup>C</sup>
						</Typography>
						<Typography variant='body1' textAlign='center'>
							{ item.weather[0].description }
						</Typography>
					</StyledPaperCard>
				))
			}
		</StyledBottomBtnCards>
	)
}