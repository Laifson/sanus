import React from 'react';
import {AddAllButton, Container, ResultLabel, Divider, LabelAndButtonWrapper} from "./SearchresultsElements";
import TherapistCard from "../cards/TherapistCard";
import styled from 'styled-components'

export default function SearchResults({cardData}) {

    return (

        <Container>
            <LabelAndButtonWrapper>
                <ResultLabel>{cardData.length} Ergebnisse: </ResultLabel>
                <AddAllButton>Alle Ergebnisse speichern</AddAllButton>
            </LabelAndButtonWrapper>
            <Divider/>
            <SearchResultElements>
                {cardData.map(therapist => <TherapistCard key={therapist.id} therapist={therapist}/>)}
            </SearchResultElements>
        </Container>
    );
}


const SearchResultElements = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`