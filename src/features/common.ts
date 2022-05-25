import { WiDayRain, WiDaySnow, WiDayCloudyGusts, WiSunrise } from "react-icons/wi";
import { JsxElement } from "typescript";
import { IListItem } from "../types";

export const getDate = (date: string ): string => {

	const localeDate: string = new Date(date).toLocaleDateString();

	const months: string[] = [ 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря' ];

	const [ day, month, ] = localeDate.split('.')

	return `${day} ${months[parseInt(month, 10) - 1]}`;

}

export const getIcon = (description: string, icons: JSX.Element[]): JSX.Element => {
	if (description === 'Rain') {
		return icons[0]
	}
	else if (description === 'Snow') {
		return icons[1]
	}
	else if (description === 'Clear') {
		return icons[2]
	}
	else {
		return icons[3]
	}
}

export const filterList = (list: IListItem[]): IListItem[] => {
	return list.filter((i, idx, arr) => {
		if (idx === list.length - 1) {
			return true;
		}

		const prevDay = i.dt_txt.split(' ')[0];
		const nextDay = arr[idx + 1].dt_txt.split(' ')[0];

		if (prevDay === nextDay) return false;
		
		return true;

	})
}