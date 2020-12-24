/** @format */

import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#6d18ab',
		},
		secondary: {
			main: '#2ba037',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#dddddd',
		},
	},
});

export default theme;
