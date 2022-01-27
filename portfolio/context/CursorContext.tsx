import React, {createContext, useState} from "react";
export const CursorContext = createContext({});

const CursorContextProvider = ({children}: any) => {
    const [cursor, setCursor] = useState<any>({active: false});

    return (
        <CursorContext.Provider value={[cursor, setCursor]}>
            {children}
        </CursorContext.Provider>
    );
};

export default CursorContextProvider;
