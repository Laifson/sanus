import React, {useState} from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";


export default function Finder({cardData, setCardData, isLoading, handleSearchButton, handleSaveAll, saveTherapist}) {
    const [added, setAdded] = useState();

    return (
        <Container>
            <SearchBar handleSearchButton={handleSearchButton} setCardData={setCardData} setAdded={setAdded}/>
            <SearchResults cardData={cardData} isLoading={isLoading} handleSaveAll={handleSaveAll}
                           handleSave={saveTherapist} added={added} setAdded={setAdded}/>
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
