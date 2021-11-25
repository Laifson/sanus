import React from "react";
import BoardList from "./BoardList";
import useTherapists from "../../hooks/useTherapists";
import { Container } from "./BoardElements";

export default function Board() {
    const {therapists, handleChangeStatus} = useTherapists()
    console.log(therapists)
    return (
        <Container>
            <BoardList columnHeader="noch offen" therapists={therapists} statusToShow="OPEN"
                       handleChangeStatus={handleChangeStatus}/>
            <BoardList columnHeader="Warteliste" therapists={therapists} statusToShow="WAITLIST"
                       handleChangeStatus={handleChangeStatus}/>
            <BoardList columnHeader="Termin bekommen" therapists={therapists} statusToShow="ACTIVE"
                       handleChangeStatus={handleChangeStatus}/>
            <BoardList columnHeader="aktuell keine Kapazität" therapists={therapists} statusToShow="OCCUPIED"
                       handleChangeStatus={handleChangeStatus}/>
        </Container>
    )
}
