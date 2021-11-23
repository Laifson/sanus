import * as React from 'react';
import {
    CardBox,
    CardWrapper,
    CardTextWrapper,
    TherapistGender,
    CardTextTitle,
    CardTextBody,
    CardStatWrapper,
    CardStats,
    AddButton,
    ExpandButton,
} from "./ResultCardElements";

export default function ResultCard({therapist, handleSave}) {

    const gender = therapist.gender === "female" ? (<TherapistGender class="icons">female</TherapistGender>) : (
        <TherapistGender class="icons">male</TherapistGender>);

    const handleSaveButton = event => {
        event.preventDefault()
        handleSave(therapist)
    }

    return (
        <CardBox>
        <CardWrapper>
            <CardTextWrapper>
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
                    <AddButton onClick={handleSaveButton}>add_circle</AddButton>
                </CardStats>
                <CardStats>
                    <ExpandButton href="#">expand_circle_down</ExpandButton>
                </CardStats>
            </CardStatWrapper>
        </CardWrapper>
        </CardBox>
    );
}