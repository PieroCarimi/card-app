import React, { createContext, ReactNode, useState } from "react";
import { TContext } from "./interfaces/interfaces";
import App from "./App";
import{ utilityGetCachedPage, utilitySetCachedPage } from './utilities'

type ContextProvider = {
    children: React.ReactNode,
}

export const AppContext = createContext<TContext>({
    currentPage: "Home",
    cards: [],
    handlePageChange : () => {}
});

export const AppProvider = ({ children }: ContextProvider) => {
    const pageLocalStorage = utilityGetCachedPage();
    const[currentPage, setCurrentPage] = useState<string>(pageLocalStorage)

    function handlePageChange(page: string): void {
        setCurrentPage(page);
        localStorage.setItem("page", page);
    }

    return (
        <AppContext.Provider value={{ currentPage, cards:[], handlePageChange }}>
            {children}
        </AppContext.Provider>
    );
};
