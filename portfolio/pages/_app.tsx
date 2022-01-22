import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globalStyle";
import "../node_modules/normalize.css";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../src/components/Theme";
import { darkTheme } from "../src/components/Theme";
import CursorContextProvider from "../context/CursorContext";
import { CursorContext } from "../context/CursorContext";
import { Cursor } from "../src/components/mouseAnimation/Cursor";
import React, { useContext } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
    <Cursor>
     
        <Component {...pageProps} />
        </Cursor>
    </ThemeProvider>
  );
}

export default MyApp;
