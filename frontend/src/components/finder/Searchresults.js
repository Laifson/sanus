import React from 'react';
import {AddAllButton, Container, ResultLabel, Divider, LabelAndButtonWrapper} from "./SearchresultsElements";

const Searchresults = () => {
    return (
        <Container>
            <LabelAndButtonWrapper>
            <ResultLabel>29 Ergebnisse: </ResultLabel>
            <AddAllButton>Alle Ergebnisse speichern</AddAllButton>
            </LabelAndButtonWrapper>
            <Divider/>
        </Container>
    );
};

export default Searchresults;
