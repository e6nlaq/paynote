import { LargeTitle } from '@fluentui/react-components';

import { useLocalStorage } from './hook/useLocalStorage';

interface setting {
	theme: 'light' | 'dark' | 'highcontrast';
}

function Setting() {
	const [settings, setSettings] = useLocalStorage(
		'setting',
		JSON.stringify({
			theme: 'light',
		} as setting)
	);

	const getvalue = (key: keyof setting) => {};

	return (
		<>
			<LargeTitle>Setting</LargeTitle>
		</>
	);
}

export default Setting;
