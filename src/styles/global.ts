import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	
	body {
		background: ${(props) => props.theme.colors.backgroundPrimary};
		color: ${(props) => props.theme.colors.text};

		font-size: 16px;
	}
	
	h1, h2, h3, h4, h5, h6 {
		font-family: ${(props) => props.theme.fonts.title};
	}

	input, textarea {
		border: 1px solid ${(props) => props.theme.colors.border};
		outline: none;

		font-family: ${(props) => props.theme.fonts.input};

		padding: 6px;
	}

	button {
		border: none;
		outline: none;

		font-family: ${(props) => props.theme.fonts.text};
	}

	a {
		color: ${(props) => props.theme.colors.textLink};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	hr {
		border: none;
		outline: none;

		background: ${(props) => props.theme.colors.hr};

		width: 100%;
		height: 1px;
	}
`;
