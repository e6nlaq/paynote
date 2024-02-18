import { setting, default_setting } from '../types/setting';

export function getSetting(data_raw: string | null, key: keyof setting) {
	if (typeof data_raw === 'string') {
		const data: setting = JSON.parse(data_raw);
		if (data[key] === undefined) {
			return default_setting[key];
		} else {
			return data[key];
		}
	} else {
		return default_setting[key];
	}
}
