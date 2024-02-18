import {
	Dropdown,
	LargeTitle,
	Option,
	Link,
	Button,
	Field,
} from '@fluentui/react-components';
import { useState } from 'react';

import { useLocalStorage } from './hook/useLocalStorage';
import { valueOf } from './types/valueOf';
import { setting, default_setting } from './types/setting';

import './css/Setting.css';

function Setting() {
	const [settings_str, setSettings_str] = useLocalStorage(
		'setting',
		JSON.stringify(default_setting)
	);
	const [settings, setSettings] = useState<setting>(JSON.parse(settings_str));

	const setvalue = (key: keyof setting, value: valueOf<setting>) => {
		const tmp = settings;
		tmp[key] = value;

		setSettings(tmp);
		setSettings_str(JSON.stringify(tmp));
	};

	console.log(settings, settings_str, localStorage);

	const themeList = ['ライト', 'ダーク', 'ハイコントラスト'];
	const theme_raws: Record<string, string> = {
		ライト: 'light',
		ダーク: 'dark',
		ハイコントラスト: 'highcontrast',
	};
	const theme_show: Record<string, string> = {
		light: 'ライト',
		dark: 'ダーク',
		highcontrast: 'ハイコントラスト',
	};

	const [is_themeChanged, themeChanged] = useState(false);

	return (
		<>
			<LargeTitle>Setting</LargeTitle>

			<div className='settings'>
				<Field
					label='アプリテーマ'
					hint={
						is_themeChanged
							? '変更を適用するには再読み込みしてください。'
							: ''
					}
				>
					<Dropdown defaultValue={theme_show[settings.theme]}>
						{themeList.map((theme) => (
							<Option
								key={theme_raws[theme]}
								onClick={() => {
									setvalue(
										'theme',
										theme_raws[theme] as valueOf<setting>
									);
									themeChanged(true);
								}}
							>
								{theme}
							</Option>
						))}
					</Dropdown>
				</Field>
				{is_themeChanged && (
					<Link onClick={() => location.reload()}>今すぐ適用</Link>
				)}

				{/* 設定全消し */}
			</div>
			<Button>設定リセット</Button>
		</>
	);
}

export default Setting;
