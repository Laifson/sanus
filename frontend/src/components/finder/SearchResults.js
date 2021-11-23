import React from 'react';
import {Container, CardContainer, ResultLabel, Divider, LabelAndButtonWrapper, Spinner} from "./SearchresultsElements";
import ResultCard from "../cards/ResultCard";

export default function SearchResults({loading, cardData, setCardData, handleSaveAll, handleSave}) {

    const dateTime = new Date().getTime();

    const handleSaveAllButton = event => {
        event.preventDefault()
        cardData.forEach(() => cardData.dateAdded === dateTime)
        handleSaveAll(cardData)
    }

    return (
        <Container>
            <LabelAndButtonWrapper>
                <ResultLabel>{cardData.length} Ergebnisse: </ResultLabel>
                <button class="button" onClick={handleSaveAllButton}>Alle Ergebnisse speichern</button>
            </LabelAndButtonWrapper>
            <Divider/>
            <CardContainer>
                {loading ? <>Loading... <Spinner/></> : null}
                {cardData.map(therapist => <ResultCard key={therapist.id} therapist={therapist}
                                                       handleSave={handleSave}/>)}
            </CardContainer>
        </Container>
    );
}
