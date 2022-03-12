import 'axios';

declare module 'axios' {
  interface HeadersDefaults {
    Authorization?: string;
  }
}