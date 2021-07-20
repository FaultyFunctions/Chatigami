/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { loader } from '@monaco-editor/react';
// import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { ChakraProvider } from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';
import './index.css';

// const themes = {
// 	dracula: `${process.env.PUBLIC_URL}/assets/themes/dracula-theme.css`,
// 	light: `${process.env.PUBLIC_URL}/assets/themes/light-theme.css`
// };

// LOAD MONACO FROM LOCAL FILES
loader.config({
	paths: {
		vs: 'monaco-editor/min/vs'
	}
});

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider resetCSS>
			{/* <Global styles={GlobalStyles} /> */}
			<App />
		</ChakraProvider>
	</React.StrictMode>,

	document.getElementById('root')
);
