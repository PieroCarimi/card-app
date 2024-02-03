import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";

interface CardProps {
    id: number;
    url: string;
    title: string;
    preferiti: boolean;
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

function Preferiti(): JSX.Element{
    const [cards, setCards] = useState<CardProps[]>(() => {
        const cachedCards = localStorage.getItem("cards");
        return cachedCards ? JSON.parse(cachedCards) : [];
    });

    function handlePreferitiClick(id: number){
        const newCards = cards.map(card =>
            card.id === id ? {...card, preferiti: !card.preferiti} : card);
            setCards(newCards);
        localStorage.setItem("cards", JSON.stringify(newCards));
    }
    
    return (
    <>
        <Grid>
            {cards.filter(card => card.preferiti === true).map(card =>(
                    <Card key={card.id} url={card.url} title={card.title} preferiti={card.preferiti} onPreferitiClick={() => handlePreferitiClick(card.id)}/>
            ))}
        </Grid>
    </>
    );
}

export default Preferiti;