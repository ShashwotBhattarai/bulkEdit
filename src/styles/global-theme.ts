import { extendTheme, theme } from "@chakra-ui/react";

const globalTheme = extendTheme({
  ...theme,
  fonts: {
    ...theme.fonts,
  },
  colors: {
    primary: "#0D9494",
    ...theme.colors,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default globalTheme;
