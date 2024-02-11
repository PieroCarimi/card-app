import React, { useContext, useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import {CardProps} from "../interfaces/interfaces";
import { AppContext } from "../Context";

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
    const {cards, handleFavoritesClick} = useContext(AppContext);

    return (
    <>
        <Grid>
            {cards.filter((card : CardProps) => card.favorites === true).map(card =>(
                <Card key={card.id} url={card.url} title={card.title} favorites={card.favorites} description={card.description} onFavoritesClick={() => handleFavoritesClick(card.id)}/>
            ))}
        </Grid>
    </>
    );
}

export default Favorites;