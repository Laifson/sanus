import React from "react";
import BoardList from "./BoardList";
import {Container} from "./BoardElements";
import {DragDropContext} from 'react-beautiful-dnd';

export default function Board({therapists, handleChangeStatus, removeTherapist}) {
    return (
        <Container>
            <DragDropContext>
                        <BoardList columnHeader="noch offen" therapists={therapists} statusToShow="OPEN"
                                   handleChangeStatus={handleChangeStatus} removeTherapist={removeTherapist}/>
                        <BoardList columnHeader="Warteliste" therapists={therapists} statusToShow="WAITLIST"
                                   handleChangeStatus={handleChangeStatus} removeTherapist={removeTherapist}/>
                        <BoardList columnHeader="Termin anstehend" therapists={therapists} statusToShow="ACTIVE"
                                   handleChangeStatus={handleChangeStatus} removeTherapist={removeTherapist}/>
                        <BoardList columnHeader="keine Kapazität" therapists={therapists} statusToShow="OCCUPIED"
                                   handleChangeStatus={handleChangeStatus} removeTherapist={removeTherapist}/>
            </DragDropContext>
        </Container>
    )
}
