import { createGlobalStyle } from "styled-components";
import globalTheme from "./global-theme";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    color: ${globalTheme.colors.black};
    font-family: ${globalTheme.fonts.body};
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }
`;
