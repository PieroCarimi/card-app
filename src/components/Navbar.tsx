import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context";


interface StyledH3Props {
    $currentPage: string;
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

const StyledDivHome = styled.div<StyledH3Props>(({ $currentPage }) => ({
    fontSize: ($currentPage === "Home") ? '1.875em' :'1.2em',
    marginLeft: '20px',
    marginRight: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
}));

const StyledDivFavorites = styled.div<StyledH3Props>(({ $currentPage }) => ({
    fontSize: ($currentPage === "Favorites") ? '1.875em' :'1.2em',
    marginLeft: '20px',
    marginRight: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
}));

const StyledH3 = styled.h3({
    cursor: 'pointer',
});

function Navbar(): JSX.Element {
    const { currentPage, handlePageChange } = useContext(AppContext)
    return (
        <>
            <ContainerNavbar>
            <StyledDivHome $currentPage={currentPage}>
                <StyledH3 onClick={() => handlePageChange("Home")}>HOME</StyledH3>
            </StyledDivHome>
            <StyledDivFavorites $currentPage={currentPage}>
                <StyledH3 onClick={() => handlePageChange("Favorites")}>PREFERITI</StyledH3>
            </StyledDivFavorites>
            </ContainerNavbar>
        </>
    );
}

export default Navbar;
