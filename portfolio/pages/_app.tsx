import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globalStyle";
import "../node_modules/normalize.css";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../src/components/Theme";
import React, { useState } from "react";
import { Cursor } from "../src/components/mouseAnimation/Cursor";
import { CursorContext } from "../context/CursorContext";
function MyApp({ Component, pageProps }: AppProps) {
  const [cursorcolor, setCursorColor] = useState("#ff9d9e");
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <CursorContext.Provider value={{ cursorcolor, setCursorColor }}>
        <Cursor cursorcolor={cursorcolor}>
          <Component {...pageProps} />
        </Cursor>
      </CursorContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
