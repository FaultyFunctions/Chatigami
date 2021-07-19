/** @format */

import { Store } from 'pullstate';

interface ISettingsStore {
	theme: string;
	test1: string;
}

export const SettingsStore = new Store<ISettingsStore>({
	theme: 'dracula',
	test1: 'test1'
});

SettingsStore.subscribe(
	s => s,
	s => {
		console.log(s);
	}
);
