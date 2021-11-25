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
import {useEffect, useRef, useState} from "react";

export default function TherapistCardNew({therapist}) {
    const [expanded, setExpanded] = useState(false);
    const [accodionHeight, setAccodionHeight] = useState(0);
    const ref = useRef(null);

    const open = () => setExpanded(!expanded);

    useEffect(() => {
        const getHeight = ref.current.scrollHeight;
        setAccodionHeight(getHeight);
    }, [expanded]);

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
                    <CardTextBody onClick={open}
                                  className={expanded ? "show" : ""}
                                  setHeight={accodionHeight}
                                  ref={ref}
                    >
                        {therapist.street}
                        <br/>
                        {therapist.postalCode}, {therapist.city}
                        <br/>
                        {therapist.phone}
                        <div className="accodion" ref={ref}>
                            {therapist.email}
                            {therapist.website}
                            {therapist.languages}
                        </div>
                    </CardTextBody>
                </CardTextWrapper>
                <CardStatWrapper>
                    <CardStats>
                        <CheckedButton>task_alt</CheckedButton>
                    </CardStats>
                    <CardStats>
                        <ExpandButton>expand_circle_down</ExpandButton>
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