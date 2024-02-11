import React, { createContext, ReactNode, useState } from "react";
import { CardProps, TContext } from "./interfaces/interfaces";
import{ utilityGetCachedCards, utilityGetCachedPage, utilitySetCachedCards, utilitySetCachedPage } from './utilities';

type ContextProvider = {
    children: React.ReactNode,
}

export const AppContext = createContext<TContext>({
    currentPage: "Home",
    cards: [],
    handlePageChange : () => {},
    addCard: () => {},
    handleFavoritesClick: () => {},
});

export const AppProvider = ({ children }: ContextProvider) => {
    const pageLocalStorage = utilityGetCachedPage();
    const [currentPage, setCurrentPage] = useState<string>(pageLocalStorage);
    
    const [cards, setCards] = useState<CardProps[]>(utilityGetCachedCards());

    function handlePageChange(page: string): void {
        setCurrentPage(page);
        utilitySetCachedPage(page);
    }

    function addCard(newCard: CardProps): void {
        const updatedCards = [...cards, newCard];
        setCards(updatedCards);
        utilitySetCachedCards(updatedCards);
    };

    function handleFavoritesClick(id: number): void{
        const newCards = cards.map(card =>
            card.id === id ? {...card, favorites: !card.favorites} : card
        );
        setCards(newCards);
        utilitySetCachedCards(newCards);
    }

    return (
        <AppContext.Provider value={{ currentPage, cards, handlePageChange, addCard, handleFavoritesClick }}>
            {children}
        </AppContext.Provider>
    );
};
