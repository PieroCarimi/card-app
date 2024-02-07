export interface CardProps {
    id: number;
    url: string;
    title: string;
    favorites: boolean;
    description: string;
}

export interface TContext {
    currentPage : string;
    cards: Array<CardProps>
}