import React, {useState} from "react";
import styled from "styled-components";
import SearchBar from "../finder/SearchBar";
import SearchResults from "../finder/SearchResults";
import {searchCardData} from "../../service/kv-api-service";


export default function Finder() {
    const [cardData, setCardData] = useState([]);

    const handleSearchButton = (params) => {
        searchCardData(params)
            .then(x => {console.log(x); setCardData(x)})
            .catch(error => console.error(error))
    }

    return (
        <Container>
            <SearchBar handleSearchButton={handleSearchButton}/>
            <SearchResults cardData={cardData}/>
        </Container>
    )
}

const Container = styled.div`

`