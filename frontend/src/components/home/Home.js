import React from "react";
import {
    Container,
    SubContainer,
    ButtonGrid,
    Label, Icon, InsideButtonWrapper
} from "./HomeElements";
import useTherapists from "../../hooks/useTherapists";
import {useNavigate} from "react-router-dom";

export default function Home() {

    let navigate = useNavigate();

    const {therapists} = useTherapists();

    let dayTime = new Date();
    dayTime = dayTime.getHours();
    let greeting = "";

    const userName = "Carmen";

    if (dayTime >= 1 && dayTime < 11) {
        greeting = "Guten Morgen";
    } else if (dayTime >= 11 && dayTime < 18) {
        greeting = "Guten Tag"
    } else {
        greeting = "Guten Abend";
    }


    return (
        <Container class="container">
            {greeting} {userName}
            <SubContainer class="element-container">
                Du verwaltest derzeit {therapists.length} Einträge
            </SubContainer>
            <ButtonGrid>
                <button onClick={() => navigate('/list')} class="button">
                    <InsideButtonWrapper>
                        <Icon>inventory</Icon>
                        <Label>Hier geht es zur Übersicht Deiner bisher gespeicherten Einträge</Label>
                    </InsideButtonWrapper>
                </button>
                <button onClick={() => navigate('/board')} class="button">
                    <InsideButtonWrapper>
                    <Icon>view_kanban</Icon>
                    <Label>Mit dem Kanban-Board kannst Du Deine Einträge verwalten</Label>
                    </InsideButtonWrapper>
                </button>
                <button onClick={() => navigate('/finder')} class="button">
                    <InsideButtonWrapper>
                        <Icon>person_search</Icon>
                        <Label>Der Finder hilft Dir bei der Therapeutensuche</Label>
                    </InsideButtonWrapper>
                </button>
                <button onClick={() => navigate('/info')} class="button">
                    <InsideButtonWrapper>
                        <Icon>help</Icon>
                        <Label>Hier findest Du weitere Informationen und nützliche Links</Label>
                    </InsideButtonWrapper>
                </button>
            </ButtonGrid>
        </Container>
    )
}

