import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#de5126",
		},
		secondary: {
			main: "#11cb5f",
		},
		background: {
			default: '#d4d4d4'
		}
	},
	typography: {
		fontFamily: "Poppins-Regular",
	},
	overrides: {
		MuiInputBase: {
      input: {
				WebkitBoxShadow: '0 0 0 30px white inset',
			},
    },
	},
});

export default theme;