import React, { createContext, ReactNode, useState } from "react";
import { TContext } from "./interfaces/interfaces";
import App from "./App";

type ContextProvider = {
    children: React.ReactNode,
    currentPage: string
}

export const AppContext = createContext<TContext>({
    currentPage: "Home",
});

export const AppProvider = ({ children, currentPage }: ContextProvider) => {

    return (
        <AppContext.Provider value={{ currentPage }}>
            {children}
        </AppContext.Provider>
    );
};
