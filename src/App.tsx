import {
	SelectTabData,
	SelectTabEvent,
	Tab,
	TabList,
	TabValue,
	FluentProvider,
	teamsLightTheme,
	teamsDarkTheme,
	teamsHighContrastTheme,
	Theme,
} from '@fluentui/react-components';
import {
	HomeRegular,
	HomeFilled,
	bundleIcon,
	SettingsFilled,
	SettingsRegular,
	PaymentFilled,
	PaymentRegular,
	HistoryFilled,
	HistoryRegular,
} from '@fluentui/react-icons';
import { useState } from 'react';

import './css/App.css';
import Home from './Home';
import Setting from './Setting';
import { useLocalStorage } from './hook/useLocalStorage';
import { default_setting } from './types/setting';
import { getSetting } from './lib/setting_funcs';

const HomeIcon = bundleIcon(HomeFilled, HomeRegular);
const SettingIcon = bundleIcon(SettingsFilled, SettingsRegular);
const PayIcon = bundleIcon(PaymentFilled, PaymentRegular);
const HistoryIcon = bundleIcon(HistoryFilled, HistoryRegular);

const themeList: Record<string, Theme> = {
	light: teamsLightTheme,
	dark: teamsDarkTheme,
	highcontrast: teamsHighContrastTheme,
};

function App() {
	const [selectedValue, setSelectedValue] = useState<TabValue>('home');

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [setting, _setSetting] = useLocalStorage(
		'setting',
		JSON.stringify(default_setting)
	);

	const onTabSelect = (_event: SelectTabEvent, data: SelectTabData) => {
		setSelectedValue(data.value);
	};

	return (
		<>
			<FluentProvider theme={themeList[getSetting(setting, 'theme')]}>
				<div className='main'>
					<TabList
						appearance='subtle'
						selectedValue={selectedValue}
						onTabSelect={onTabSelect}
					>
						<Tab value='home' icon={<HomeIcon></HomeIcon>}>
							Home
						</Tab>
						<Tab value='payment' icon={<PayIcon></PayIcon>}>
							Pay
						</Tab>
						<Tab value='history' icon={<HistoryIcon></HistoryIcon>}>
							History
						</Tab>
						<Tab value='setting' icon={<SettingIcon></SettingIcon>}>
							Setting
						</Tab>
					</TabList>

					<br />

					<div className='app'>
						{selectedValue === 'home' && <Home></Home>}
						{selectedValue === 'setting' && <Setting></Setting>}
					</div>
				</div>
			</FluentProvider>
		</>
	);
}

export default App;
