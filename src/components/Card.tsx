import React from "react";
import styled from "styled-components";

interface CardProps {
    url: string;
    title: string;
    preferiti: boolean;
    descrizione: string,
    onPreferitiClick: () => void;
}

interface CardPreferita{
    preferiti: boolean;
}

const ContainerCard = styled.div(() => ({
    width: '250px',
    height: '350px',
    //marginBottom: '75px',
    boxShadow: '10px 10px 15px 5px grey',
    display: 'flex', // Aggiunto per centrare l'elemento ContainerImage
    flexDirection: 'column',
    justifyContent: 'center', // Aggiunto per centrare l'elemento ContainerImage
    alignItems: 'center'
}))

const ContainerImage = styled.div(() => ({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderBottom: '2px inset',
}))

const Image = styled.img(() => ({
    width: '100%',
    height: '100%',
    objectFit: 'scale-down',
}))

const Preferiti = styled.p<CardPreferita>(({preferiti}) => ({
    color: preferiti ? "red" : "black",
    cursor: 'pointer',
}))

function Card({url, title, preferiti, descrizione, onPreferitiClick}: CardProps): JSX.Element{
    return(
        <>
            <ContainerCard>
                <ContainerImage>
                    <Image src={url}></Image>
                </ContainerImage>
                    <p><b>{title}</b></p>
                    <p>{descrizione}</p>
                    <Preferiti onClick={onPreferitiClick} preferiti={preferiti}>♥</Preferiti>
            </ContainerCard>
        </>
    )
}

export default Card;