import 'styled-components';
import type { Theme } from '@styles/themes/light';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
