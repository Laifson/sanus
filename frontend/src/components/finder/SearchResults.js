import React from 'react';
import {AddAllButton, Container, ResultLabel, Divider, LabelAndButtonWrapper} from "./SearchresultsElements";
import TherapistCard from "../cards/TherapistCard";
import styled from 'styled-components'

export default function SearchResults({cardData, handleSaveAll}) {

    return (

        <Container>
            <LabelAndButtonWrapper>
                <ResultLabel>{cardData.length} Ergebnisse: </ResultLabel>
                <AddAllButton onClick={handleSaveAll}>Alle Ergebnisse speichern</AddAllButton>
            </LabelAndButtonWrapper>
            <Divider/>
            <SearchResultElements>
                {cardData.map(therapist => <TherapistCard key={therapist.id} therapist={therapist}/>)}
            </SearchResultElements>
        </Container>
    );
}


const SearchResultElements = styled.section`
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  column-gap: 10px;
  row-gap: 15px;
`