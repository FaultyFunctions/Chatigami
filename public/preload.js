/** @format */

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
	send: (channel, data) => {
		// whitelist channels
		let validChannels = ['toMain'];
		if (validChannels.includes(channel)) {
			ipcRenderer.send(channel, data);
		}
	},
	receive: (channel, func) => {
		let validChannels = ['fromMain'];
		if (validChannels.includes(channel)) {
			ipcRenderer.on(channel, (event, ...args) => func(...args));
		}
	}
});
