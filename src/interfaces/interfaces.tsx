export interface CardProps {
    id: number;
    url: string;
    title: string;
    favorites: boolean;
    description: string;
}

export interface TContext {
    currentPage : string;
    cards: Array<CardProps>;
    handlePageChange : (page : string) => void;
    addCard : (newCard : CardProps) => void;
    handleFavoritesClick : (id : number) => void
}