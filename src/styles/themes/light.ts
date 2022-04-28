export const lightTheme = {
	fonts: {
		title: '"Poppins", "Noto Sans", sans-serif',
		input: '"Roboto", "Noto Sans", sans-serif',
		text: '"Noto Sans", "Roboto", sans-serif',
	},
	colors: {
		primary: '#0084ff',
		text: '#000000',
		textLink: '#1c4fbd',

		backgroundPrimary: '#ebebeb',
		backgroundSecondary: '#ffffff',
		backgroundTertiary: '#c2c2c2',

		border: '#a6a6a6',
		hr: '#8f8f8f',
	},
};

export type Theme = typeof lightTheme;
