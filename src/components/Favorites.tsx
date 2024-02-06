import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import {CardProps} from "../interfaces/interfaces"

const Grid = styled.div({
    margin:'100px',
    marginTop: '100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    rowGap: '150px',
    columnGap: '150px',
    justifyContent: 'center',
    placeItems: 'center',
})

function Favorites(): JSX.Element{
    const [cards, setCards] = useState<CardProps[]>(() => {
        const cachedCards = localStorage.getItem("cards");
        return cachedCards ? JSON.parse(cachedCards) : [];
    });

    function handleFavoritesClick(id: number): void{
        const newCards = cards.map(card =>
            card.id === id ? {...card, favorites: !card.favorites} : card);
            setCards(newCards);
        localStorage.setItem("cards", JSON.stringify(newCards));
    }
    
    return (
    <>
        <Grid>
            {cards.filter(card => card.favorites === true).map(card =>(
                <Card key={card.id} url={card.url} title={card.title} favorites={card.favorites} description={card.description} onFavoritesClick={() => handleFavoritesClick(card.id)}/>
            ))}
        </Grid>
    </>
    );
}

export default Favorites;