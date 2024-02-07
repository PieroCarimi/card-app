import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";
import styled from "styled-components";
import {CardProps} from "../interfaces/interfaces"
import { utilityGetCachedCards, utilitySetCachedCards} from "../utilities";

const Grid = styled.div({
    margin:'100px',
    marginTop: '100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    rowGap: '150px',
    columnGap: '150px',
    justifyContent: 'center',
    placeItems: 'center',
});

function Home(): JSX.Element{
    const [cards, setCards] = useState<CardProps[]>(utilityGetCachedCards());

    function addCard(newCard: CardProps): void {
        const updatedCards = [...cards, newCard];
        setCards(updatedCards);
        utilitySetCachedCards(updatedCards);
    };

    function handleFavoritesClick(id: number): void{
        const newCards = cards.map(card =>
            card.id === id ? {...card, favorites: !card.favorites} : card);
            setCards(newCards);
        localStorage.setItem("cards", JSON.stringify(newCards));
    }
    
    return (
    <>
        <Form addCard={addCard}/>
        <Grid>
            {cards.map((card: CardProps) => (
                <Card key={card.id} url={card.url} title={card.title} favorites={card.favorites} description={card.description} onFavoritesClick={() => handleFavoritesClick(card.id)}/>
            ))}
        </Grid>
    </>
    );
}

export default Home;