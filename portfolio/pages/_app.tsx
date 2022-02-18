import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globalStyle";
import "../node_modules/normalize.css";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../src/components/Theme";
import React, { useState } from "react";
import { Cursor } from "../src/components/mouseAnimation/Cursor";
import { CursorContext } from "../context/CursorContext";
import FirstTimeContext from "../context/FirstTimeContext";
function MyApp({ Component, pageProps }: AppProps) {
  const [cursorcolor, setCursorColor] = useState("#ff9d9e");
  const [firstTime, setFirstTime] = useState(true);
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <CursorContext.Provider value={{ cursorcolor, setCursorColor }}>
        <FirstTimeContext.Provider value={{firstTime,setFirstTime}}>
        <Cursor cursorcolor={cursorcolor}>
          <Component {...pageProps} />
        </Cursor>
          </FirstTimeContext.Provider>
      </CursorContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
