import React from 'react';
import {Container, CardContainer, ResultLabel, Divider, LabelAndButtonWrapper, Spinner} from "./SearchresultsElements";
import ResultCard from "../cards/ResultCard";

export default function SearchResults({cardData, isLoading, handleSaveAll, handleSave, added, setAdded}) {

    const handleSaveAllButton = event => {
        event.preventDefault()
        handleSaveAll(cardData)
        setAdded(true)
    }

    return (
        <Container>
            <LabelAndButtonWrapper>
                <ResultLabel>{cardData.length} Ergebnisse: </ResultLabel>
                <button class="button" onClick={handleSaveAllButton}>Alle Ergebnisse speichern</button>
            </LabelAndButtonWrapper>
            <Divider/>
            <CardContainer>
                {isLoading ? <Spinner/> : null}
                {cardData.map(therapist => <ResultCard key={therapist.id} therapist={therapist}
                                                       handleSave={handleSave} added={added} setAdded={setAdded}/>)}
            </CardContainer>
        </Container>
    );
}
