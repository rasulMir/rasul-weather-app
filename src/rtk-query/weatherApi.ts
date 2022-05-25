import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICityData } from '../types';

const weatherDataApi = createApi({
	reducerPath: 'weatherDataApi',

	tagTypes: ['Data'],

	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.openweathermap.org/data/2.5'
	}),
	endpoints: (builder) => ({

		getWeatherCityData: builder.query<ICityData, string>({
			query: (city) => `forecast?q=${city}&units=metric&lang=ru&appid=c89079bd02257eba24be5939c7086368`,
			providesTags: (result, error, id) => [{ type: 'Data' }],
		}),

	})

});

export const { useGetWeatherCityDataQuery } = weatherDataApi;

export default weatherDataApi;