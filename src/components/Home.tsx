import React, { useEffect, useState } from "react";
import Form from "./Form";
import Card from "./Card";
import styled from "styled-components";

interface CardProps {
    id: number;
    url: string;
    title: string;
    preferiti: boolean;
    descrizione: string;
}

const Grid = styled.div(() => ({
    margin:'100px',
    marginTop: '100px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    rowGap: '150px',
    columnGap: '150px',
    justifyContent: 'center',
    placeItems: 'center',
}))

function Home(): JSX.Element{
    const [cards, setCards] = useState<CardProps[]>(() => {
        const cachedCards = localStorage.getItem("cards");
        return cachedCards ? JSON.parse(cachedCards) : [];
    });

    /*const cachedCard = localStorage.getItem("card") ?
        JSON.parse(localStorage.getItem("card")!):
        [];*/

    const addCard = (newCard: CardProps) => {
        const updatedCards = [...cards, newCard];
        setCards(updatedCards);
        localStorage.setItem("cards", JSON.stringify(updatedCards));
    };

    function handlePreferitiClick(id: number){
        const newCards = cards.map(card =>
            card.id === id ? {...card, preferiti: !card.preferiti} : card);
            setCards(newCards);
        localStorage.setItem("cards", JSON.stringify(newCards));
    }
    

    return (
    <>
        <Form addCard={addCard}/>
        <Grid>
            {cards.map((card: CardProps) => (
                <Card key={card.id} url={card.url} title={card.title} preferiti={card.preferiti} descrizione={card.descrizione} onPreferitiClick={() => handlePreferitiClick(card.id)}/>
            ))}
        </Grid>
    </>
    );
}

export default Home;