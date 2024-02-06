export interface CardProps {
    id: number;
    url: string;
    title: string;
    preferiti: boolean;
    descrizione: string;
}

export interface TContext {
    currentPage : string;
}