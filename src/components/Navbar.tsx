import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context";

interface NavbarProps {
    handlePageChange: (page: string) => void;
    currentPage: string;
}

interface StyledH3Props {
    currentPage: string;
}

const ContainerNavbar = styled.div({
    display: 'flex',
    justifyContent: 'end',
    marginLeft: '50px',
    marginRight: '100px',
    marginBottom:'50px',
    '@media (max-width: 400px)': {
        flexDirection: 'column',
        alignItems: 'center',
    },
});

const StyledDivHome = styled.div<StyledH3Props>(({ currentPage }) => ({
    fontSize: (currentPage === "Home") ? '1.875em' :'1.2em',
    marginLeft: '20px',
    marginRight: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
}));

const StyledDivPreferiti = styled.div<StyledH3Props>(({ currentPage }) => ({
    fontSize: (currentPage === "Preferiti") ? '1.875em' :'1.2em',
    marginLeft: '20px',
    marginRight: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
}));

const StyledH3 = styled.h3({
    cursor: 'pointer',
});

function Navbar({ handlePageChange }: NavbarProps): JSX.Element {
    const context = useContext(AppContext);
    const { currentPage } = context
    return (
        <>
            <ContainerNavbar>
                <StyledDivHome currentPage={currentPage}><StyledH3 onClick={() => handlePageChange("Home")}>HOME</StyledH3></StyledDivHome>
                <StyledDivPreferiti currentPage={currentPage}><StyledH3 onClick={() => handlePageChange("Preferiti")}>PREFERITI</StyledH3></StyledDivPreferiti>
            </ContainerNavbar>
        </>
    );
}

export default Navbar;
