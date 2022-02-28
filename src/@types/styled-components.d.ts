import 'styled-components';
import type { Theme } from '@styles/themes/dark';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
  }
}