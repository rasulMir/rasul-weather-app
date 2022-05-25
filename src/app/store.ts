import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import weatherDataApi from '../rtk-query/weatherApi';

export const store = configureStore({
  reducer: {
    [weatherDataApi.reducerPath]: weatherDataApi.reducer,
  },
	middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(weatherDataApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
