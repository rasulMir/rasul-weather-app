export interface ICoords { lat: number, lon: number }

export interface ICity {
	coord: ICoords,
	country: string,
	id: number,
	name: string,
	population: number,
	sunrise: number
	sunset: number,
	timezone: number,
}

interface IMain {
	feels_like: number,
	grnd_level: number,
	humidity: number,
	pressure: number,
	sea_level: number,
	temp: number,
	temp_kf: number,
	temp_max: number,
	temp_min: number,
}

export interface IListItem {
	clouds: {all: number},
	dt: number,
	dt_txt: string,
	main: IMain,
	pop: number,
	sys: {pod: string},
	visibility: number,
	weather: {id: number, main: string, description: string, icon: string}[]
	wind: {speed: number, deg: number, gust: number}
}

export interface ICityData {
	city: ICity,
	cnt: number,
	cod: string,
	list: IListItem[],
	message: number,
}