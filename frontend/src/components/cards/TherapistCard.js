import * as React from 'react';
import {Container, TherapistsName, TherapistGender, CardHeader, Divider, CardBody} from './TherapistCardElements';

export default function TherapistCard({therapist, onSave, onExpand, onDelete}) {

    const gender = therapist.gender === "female" ? (<TherapistGender>female</TherapistGender>) : (
        <TherapistGender>male</TherapistGender>);

    return (
        <Container>
            <CardHeader>
            <TherapistsName>
                {therapist.title} {therapist.firstName} {therapist.lastName}
            </TherapistsName>
                {gender}
            </CardHeader>
            <Divider/>
            <CardBody>
                {therapist.street}
                {therapist.postalCode}, {therapist.city}
                {therapist.phone}
            </CardBody>
            {onSave && <button onClick={() => onSave(therapist.id)}>Speichern</button>}
            {onDelete && <button onClick={() => onDelete(therapist.id)}>Löschen</button>}
            {onExpand && <button onClick={() => onExpand(therapist.id)}>Weitere Informationen</button>}
        </Container>
    )

}
