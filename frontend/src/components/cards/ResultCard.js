import * as React from 'react';
import {
    CardBox,
    CardWrapper,
    CardTextWrapper,
    TherapistGender,
    CardTextTitle,
    CardTextBody,
    PhoneNumber,
    CardStatWrapper,
    CardStats,
    AddButton,
    AddedButton,
    ExpandButton,
} from "./ResultCardElements";

export default function ResultCard({therapist, handleSave, added, setAdded}) {

    const gender = therapist.gender === "female" ? (<TherapistGender class="icons">female</TherapistGender>) : (
        <TherapistGender class="icons">male</TherapistGender>);

    const handleSaveButton = event => {
        event.preventDefault()
        handleSave(therapist)
        setAdded(true)
    }

    const addedStatus = added === true ? <AddedButton onClick={null}>bookmark_added</AddedButton> : <AddButton onClick={handleSaveButton}>add_circle</AddButton>

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
                    <PhoneNumber>{therapist.phone}</PhoneNumber>
                </CardTextBody>
            </CardTextWrapper>
            <CardStatWrapper>
                <CardStats>
                    {addedStatus}
                </CardStats>
                <CardStats>
                    <ExpandButton href="#">expand_circle_down</ExpandButton>
                </CardStats>
            </CardStatWrapper>
        </CardWrapper>
        </CardBox>
    );
}