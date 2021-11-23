import * as React from 'react';
import {
    CardWrapper,
    CardTextWrapper,
    CardTextDate,
    TherapistGender,
    CardTextTitle,
    CardTextBody,
    CardStatWrapper,
    CardStats,
    ExpandButton,
    DeleteButton,
    CheckedButton,
    CardBox,
} from "./TherapistCardStyles";
import useTherapists from "../../hooks/useTherapists";

export default function TherapistCardNew({therapist}) {
    const {removeTherapist} = useTherapists();

    function startDrag(event, therapist) {
        const objectString = JSON.stringify(therapist)
        event.dataTransfer.setData("therapist", objectString)
    }

    const gender = therapist.gender === "female" ? (<TherapistGender>female</TherapistGender>) : (
        <TherapistGender>male</TherapistGender>);


    let date = new Date().getTime()
    let dateAdded = therapist.dateAdded
    let difference = date - dateAdded
    let days = Math.ceil(difference / (1000 * 3600 * 24))

    return (
        <CardBox>
            <CardWrapper status={therapist.status} draggable
                         onDragStart={
                             (e) => {
                                 startDrag(e, therapist)
                             }
                         }>
                <CardTextWrapper>
                    <CardTextDate>vor {days} {days > 1 ? 'Tagen' : 'Tag'} hinzugefügt</CardTextDate>
                    <CardTextTitle>{therapist.title} {therapist.firstName} {therapist.lastName} {gender}</CardTextTitle>
                    <CardTextBody>
                        {therapist.street}
                        <br/>
                        {therapist.postalCode}, {therapist.city}
                        <br/>
                        {therapist.phone}
                    </CardTextBody>
                </CardTextWrapper>
                <CardStatWrapper>
                    <CardStats>
                        <CheckedButton>task_alt</CheckedButton>
                    </CardStats>
                    <CardStats>
                        <ExpandButton href="#">expand_circle_down</ExpandButton>
                    </CardStats>
                    <CardStats>
                        {removeTherapist &&
                        <DeleteButton onClick={() => removeTherapist(therapist.id)}>person_remove</DeleteButton>}
                    </CardStats>
                </CardStatWrapper>
            </CardWrapper>
        </CardBox>
    );
}