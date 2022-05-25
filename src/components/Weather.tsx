import React, { useState } from 'react';
import Search from './Search';
import { StyledContainer } from './AllStyles';
import Diagram from './Diagram';
import { Stack } from '@mui/material';
import CityInfoCard from './CityInfoCard';
import BottomBtnCards from './BottomBtnCards';
import { useGetWeatherCityDataQuery } from '../rtk-query/weatherApi';
import ProgressBar from './ProgressBar';

interface Props {}

const Weather: React.FC = () => {

	const [txt, setTxt] = useState<string>('london');
	const [day, setDay] = useState<number>(0);
	const { data, isError, isLoading } = useGetWeatherCityDataQuery(txt);

	const onSearch = (text: string): void => {
		setTxt(text.trim().toLowerCase());
	}
	const changeDay = (num: number): void => { setDay(num) };

	if (isError) {
		return <div>Server Occured! Please Reload Page</div>
	}

	if (!data && isLoading) {
		return (
			<ProgressBar />
		)
	}

	return (
		<>
			<StyledContainer maxWidth='lg'>
				<Stack spacing={1}>
					<Search onSearch={onSearch} />
					{
						data && <CityInfoCard list={data.list} city={data.city} listNum={day} />
					}
					{
						data && <Diagram list={data.list} dayNum={day} />
					}
					{
						data && <BottomBtnCards list={data.list} onclick={changeDay} dayNum={day} />
					}
				</Stack>
			</StyledContainer>
		</>
	)
}

export default Weather;