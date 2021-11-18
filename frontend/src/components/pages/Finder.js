import React from "react";
import styled from "styled-components";
import SearchBar from "../finder/SearchBar";
import SearchResults from "../finder/SearchResults";
import useSearchTherapists from "../../hooks/useSearchTherapists";


export default function Finder() {
    const {cardData, setCardData, handleSearchButton, handleSaveAll} = useSearchTherapists();

    return (
        <Container>
            <SearchBar handleSearchButton={handleSearchButton} setCardData={setCardData}/>
            <SearchResults cardData={cardData} handleSaveAll={handleSaveAll}/>
        </Container>
    )
}

const Container = styled.div`
  display: block;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6rem;

  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`