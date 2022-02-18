import React, { createContext, useState } from "react";

export const FirstTimeContext = createContext({
  firstTime: true,
  setFirstTime: (firstTime: boolean) => {},
});

export default FirstTimeContext;
