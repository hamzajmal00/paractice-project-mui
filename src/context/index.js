import { createContext, useContext, useState } from "react";


export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({children}) => {
    const [drawrOpen, setdrawrOpen] = useState(false);
    const value ={
        drawrOpen,
        setdrawrOpen
    }

    return <UIContext.Provider value={value} >{children}</UIContext.Provider>
}