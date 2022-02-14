import React, { createContext, useState } from "react";

export const CursorContext = createContext({
  cursorcolor: "#ff9d9e",
  setCursorColor: (color: string) => {},
});


export default CursorContext;
