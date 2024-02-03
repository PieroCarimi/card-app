import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface FormProps {
    addCard: (newCard: CardProps) => void;
}

interface CardProps{
    id: number,
    title: string,
    url: string,
    preferiti: boolean,
}

interface ButtonProp{
    disabled: boolean,
}

const ContainerForm = styled.div(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    '@media (max-width: 400px)': {
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const InputContainer = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 20px', // Spazio laterale
    maxWidth: '300px',
}));

const Input = styled.input(() => ({
    width: '100%',
    padding: '10px 10px',
}));

const ButtonContainer = styled.div(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '50px'
}))

const Button = styled.button<ButtonProp>(({disabled}) => ({
    padding: '4px 20px',
    textAlign: 'center',
    fontSize: '16px',
    transitionDuration: '0.4s',
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundColor: 'white',
    color: disabled ? 'gray' :'black',
    border: disabled ? '2px solid gray' : '2px solid black',

    ...(disabled ? {} : {
        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
        }
    })
}));

function Form({addCard}: FormProps): JSX.Element{
    
    const[newTitle, setTitle] = useState<string>("");
    const[newUrl, setUrl] = useState<string>("");
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    function handleCreateCard(){
        const newCard: CardProps = {
            id: Date.now(),
            title: newTitle,
            url: newUrl,
            preferiti: false,
        }
        addCard(newCard);
        setTitle("");
        setUrl("");
        setIsButtonDisabled(true);
    }

    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        setTitle(value);
        setIsButtonDisabled(!value || !newUrl)
    }

    function handleUrlChange(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        setUrl(e.target.value);
        setIsButtonDisabled(!value || !isValidUrl(value))
    }

    function isValidUrl(url: string): boolean {
        try{
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    return (
    <>
        <ContainerForm>
        <InputContainer>
            <Input 
                type="text"
                value={newTitle}
                onChange={handleTitleChange}
                placeholder="Inserisci un titolo"
            />
        </InputContainer>
        <InputContainer>
            <Input
                type="url"
                value={newUrl}
                onChange={handleUrlChange}
                placeholder="Inserisci l'url dell'immagine"
            />
        </InputContainer>
        </ContainerForm>
        <ButtonContainer>
            <Button onClick={handleCreateCard} disabled={isButtonDisabled}>Crea</Button>
        </ButtonContainer>
    </>
    );
}

export default Form;