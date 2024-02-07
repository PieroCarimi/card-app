import { TContext } from "./interfaces/interfaces";

export const utilityGetCachedCards = (): TContext["cards"] =>
    !!localStorage.getItem("cards")
    ? JSON.parse(localStorage.getItem("cards")!)
    : [];

export const utilityGetCachedPage = (): TContext["currentPage"] =>
    !!localStorage.getItem("page")
    ? localStorage.getItem("page")!
    : "Home";

export const utilitySetCachedCards = (cards: TContext["cards"]) => {
    localStorage.setItem("cards", JSON.stringify(cards))
}

export const utilitySetCachedPage = (page: TContext["currentPage"]) => {
    localStorage.setItem("page", page);
}