import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import useTherapists from "../../hooks/useTherapists";


export default function Finder() {
    const {loading, cardData, setCardData, handleSearchButton, handleSaveAll, saveTherapist } = useTherapists();

    return (
        <Container>
            <SearchBar handleSearchButton={handleSearchButton} setCardData={setCardData}/>
            <SearchResults loading={loading} cardData={cardData} handleSaveAll={handleSaveAll} handleSave={saveTherapist}/>
        </Container>
    )
}

const Container = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 90%;
  }
`
