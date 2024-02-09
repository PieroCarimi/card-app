import React from "react";
import styled from "styled-components";

interface CardProps {
    url: string;
    title: string;
    favorites: boolean;
    description: string,
    onFavoritesClick: () => void;
}

interface CardPreferita{
    $favorites: boolean; //prop transient. Le prop transient sono un modello in styled-components in cui si prefissa il nome della prop con un segno di dollaro ($), e styled-components non passerà queste prop al DOM.
}

const ContainerCard = styled.div({
    width: '250px',
    height: '350px',
    boxShadow: '10px 10px 15px 5px grey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

const ContainerImage = styled.div({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderBottom: '2px inset',
})

const Image = styled.img({
    width: '100%',
    height: '100%',
    objectFit: 'scale-down',
})

const Favorites = styled.p<CardPreferita>(({$favorites}) => ({
    color: $favorites ? "red" : "black",
    cursor: 'pointer',
}))

function Card({url, title, favorites, description, onFavoritesClick}: CardProps): JSX.Element{
    return(
        <>
            <ContainerCard>
                <ContainerImage>
                    <Image src={url}></Image>
                </ContainerImage>
                    <p><b>{title}</b></p>
                    <p>{description}</p>
                    <Favorites onClick={onFavoritesClick} $favorites={favorites}>♥</Favorites>
            </ContainerCard>
        </>
    )
}

export default Card;