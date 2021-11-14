import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SearchBar from "../finder/SearchBar";
import SearchResults from "../finder/SearchResults";
import axios from "axios";


export default function Finder() {
    const [cardData, setCardData] = useState([]);

    const allCardData = async() => {
        const response = await axios.get('/api/search')
        setCardData(response.data)
    }

    useEffect(() => {
        allCardData()
    }, [])

    return (
        <Container>
            <SearchBar allCardData={allCardData}/>
            <SearchResults therapists={cardData}/>
        </Container>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 5rem 0 0 5rem;
`