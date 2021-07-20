/** @format */

const { contextBridge, ipcRenderer } = require('electron');

const validSendChannels = ['toMain'];
const validReceiveChannels = ['fromMain'];

contextBridge.exposeInMainWorld('electron', {
	send: (channel, ...data) => {
		// whitelist channels
		if (validSendChannels.includes(channel)) {
			ipcRenderer.send(channel, ...data);
		}
	},
	receive: (channel, callback) => {
		if (validReceiveChannels.includes(channel)) {
			ipcRenderer.on(channel, (event, ...args) => callback(...args));
		}
	},
	once: (channel, callback) => {
		if (validReceiveChannels.includes(channel)) {
			ipcRenderer.once(channel, (event, ...args) => callback(...args));
		}
	},
	minimize: () => {
		ipcRenderer.send('minimize');
	},
	restore: () => {
		ipcRenderer.send('restore');
	},
	maximize: () => {
		ipcRenderer.send('maximize');
	},
	close: () => {
		window.close();
	}
});
