import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      placeholder: string;
      main: string;
      white: string;
      error: string;
    };
    size: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
