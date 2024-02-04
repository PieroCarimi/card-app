import React, { useState } from "react";
import styled from "styled-components";
import {CardProps} from "../interfaces/interfaces"

interface FormProps {
    addCard: (newCard: CardProps) => void;
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

const Textarea = styled.textarea(() => ({
    width: '425px',
    padding: '10px',
    marginBottom: '20px',
    '@media (max-width: 450px)': {
        width:'50%'
    },
}));

const ButtonAndTextareaContainer = styled.div(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '50px',
    flexDirection: 'column',
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

function isValidUrl(url: string): boolean {
    try{
        const imageURL = new URL(url);
        const pathname = imageURL.pathname.toLowerCase();
        return pathname.includes('jpg') || pathname.includes('jpeg') || pathname.includes('png') || pathname.includes('gif') || pathname.includes('image') || pathname.includes('images');
    } catch {
        return false;
    }
}

function Form({addCard}: FormProps): JSX.Element{
    
    const[newTitle, setTitle] = useState<string>("");
    const[newUrl, setUrl] = useState<string>("");
    const[isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const[description, setDescription] = useState<string>("")

    function handleCreateCard(){
        const newCard: CardProps = {
            id: Date.now(),
            title: newTitle,
            url: newUrl,
            preferiti: false,
            descrizione: description,
        }
        addCard(newCard);
        setTitle("");
        setUrl("");
        setDescription("");
        setIsButtonDisabled(true);
    }

    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        setTitle(value);
        setIsButtonDisabled(!value || !newUrl || !description)
    }

    function handleUrlChange(e: React.ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        setUrl(e.target.value);
        setIsButtonDisabled(!value || !isValidUrl(value) || !description)
    }

    function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>){
        const value = e.target.value;
        setDescription(value);
        setIsButtonDisabled(!value || !newUrl || !newTitle)
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
        <ButtonAndTextareaContainer>
            <Textarea 
                placeholder="Inserisci una descrizione (max 30 caratteri)"
                value={description}
                onChange={handleDescriptionChange}
                maxLength={30}
            />
            <Button onClick={handleCreateCard} disabled={isButtonDisabled}>Crea</Button>
        </ButtonAndTextareaContainer>
    </>
    );
}

export default Form;