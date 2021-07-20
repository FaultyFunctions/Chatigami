/** @format */

const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

// Conditionally include the dev tools installer to load React Dev Tools
let installExtension, REACT_DEVELOPER_TOOLS;

let mainWindow = null;

if (isDev) {
	const devTools = require('electron-devtools-installer');
	installExtension = devTools.default;
	REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;
}

async function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1440,
		height: 960,
		frame: false,
		icon: __dirname + '/assets/images/icon.ico',
		show: false,
		backgroundColor: '#2e2c29',
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			enableRemoteModule: false,
			preload: path.join(__dirname, 'preload.js')
		}
	});

	//mainWindow.hide();

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
		mainWindow.focus();
	});

	// Load from localhost if in development
	// Otherwise load index.html file
	mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

	// Open DevTools if in dev mode
	if (isDev) {
		mainWindow.webContents.on('did-frame-finish-load', () => {
			mainWindow.webContents.openDevTools({ mode: 'detach' });
		});
	}
}

// Create a new browser window by invoking the createWindow
// function once the Electron application is initialized.
// Install REACT_DEVELOPER_TOOLS as well if isDev
app.whenReady().then(() => {
	if (isDev) {
		installExtension(REACT_DEVELOPER_TOOLS, {
			loadExtensionOptions: { allowFileAccess: true },
			forceDownload: false
		})
			.then(name => console.log(`Added Extension:  ${name}`))
			.catch(error => console.log(`An error occurred: , ${error}`));
	}

	createWindow();
});

// Add a new listener that tries to quit the application when
// it no longer has any open windows. This listener is a no-op
// on macOS due to the operating system's window management behavior.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

// Add a new listener that creates a new browser window only if
// when the application has no visible windows after being activated.
// For example, after launching the application for the first time,
// or re-launching the already running application.
app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

// The code above has been adapted from a starter example in the Electron docs:
// https://www.electronjs.org/docs/tutorial/quick-start#create-the-main-script-file

ipcMain.on('toMain', (event, ...args) => {
	//mainWindow.webContents.send();
});

ipcMain.on('minimize', () => {
	mainWindow.minimize();
});

ipcMain.on('restore', () => {
	mainWindow.restore();
});

ipcMain.on('maximize', () => {
	mainWindow.maximize();
});
